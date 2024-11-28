import torch
from transformers import BertTokenizer, BertModel
import logging
from tqdm import tqdm  # To show progress bar while processing
import numpy as np
# Create and configure logger
logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)

logger = logging.getLogger(__name__)

class BiobertEmbedding:
    def __init__(self, model_path='dmis-lab/biobert-base-cased-v1.1'):
        self.tokenizer = BertTokenizer.from_pretrained(model_path)
        self.model = BertModel.from_pretrained(model_path)
        logger.info("BioBERT Model Loaded")

    def process_text(self, text):
        marked_text = "[CLS] " + text + " [SEP]"
        tokenized_text = self.tokenizer.tokenize(marked_text)
        return tokenized_text

    def eval_fwdprop_biobert(self, tokenized_text):
        segments_ids = [1] * len(tokenized_text)
        indexed_tokens = self.tokenizer.convert_tokens_to_ids(tokenized_text)

        tokens_tensor = torch.tensor([indexed_tokens])
        segments_tensors = torch.tensor([segments_ids])

        self.model.eval()
        with torch.no_grad():
            outputs = self.model(tokens_tensor, segments_tensors)

        encoded_layers = outputs.last_hidden_state  # Get the last hidden state
        return encoded_layers

    def sentence_vector(self, text):
        logger.info("Generating sentence embedding")
        tokenized_text = self.process_text(text)
        encoded_layers = self.eval_fwdprop_biobert(tokenized_text)

        # Get embeddings from the last layer and calculate the mean over tokens
        sentence_embedding = torch.mean(encoded_layers[0], dim=0)
        logger.info("Sentence Embedding Generated")
        return sentence_embedding

# Example usage
if __name__ == "__main__":
  texts = ["Breast cancers with HER2 amplification have a higher risk of CNS metastasis and poorer prognosis.","sjdhjsdhjshd dsjhjshd","shgjsgaj"]
  for text in tqdm(texts):
    biobert = BiobertEmbedding()
    sentence_embedding = biobert.sentence_vector(text)

    # Print the shape and embedding
    print(f"Sentence Embedding shape: {sentence_embedding.shape}")
    print("Sentence Embedding:", sentence_embedding)
