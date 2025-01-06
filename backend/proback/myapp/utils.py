import os
import numpy as np
import pickle
from keras.models import load_model
from .biobert_embedding import BiobertEmbedding  # Use the BiobertEmbedding class provided

# Initialize BioBERT
biobert = BiobertEmbedding()

# Load models
# Use raw string for Windows paths
# lstm_model_path = r'D:\Projects\HealthSync\backend\proback\myapp\lstm_model.keras' #change address for your pc
# svm_model_path = r'D:\Projects\HealthSync\backend\proback\myapp\svm_model.pkl'   #change address for your pc
lstm_model_path = r'C:\Users\rutab\Desktop\Ai Project\HealthSync\backend\proback\myapp\lstm_model.keras'
svm_model_path = r'C:\Users\rutab\Desktop\Ai Project\HealthSync\backend\proback\myapp\svm_model.pkl'

feature_extractor = load_model(lstm_model_path)

with open(svm_model_path, 'rb') as file:
    svm_model = pickle.load(file)

valid_diseases = [
    'Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis',
    'drug reaction', 'Peptic ulcer disease', 'AIDS', 'Diabetes',
    'Gastroenteritis', 'Bronchial Asthma', 'Hypertension', 'Migraine',
    'Cervical spondylosis', 'Paralysis (brain hemorrhage)', 'Jaundice',
    'Malaria', 'Chicken pox', 'Dengue', 'Typhoid', 'hepatitis A',
    'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E',
    'Alcoholic hepatitis', 'Tuberculosis', 'Common Cold', 'Pneumonia',
    'Dimorphic Hemorrhoids', 'Heart attack', 'Varicose veins',
    'Hypothyroidism', 'Hyperthyroidism', 'Hypoglycemia',
    'Osteoarthritis', 'Arthritis', '(vertigo) Paroxysmal Positional Vertigo',
    'Acne', 'Urinary tract infection', 'Psoriasis', 'Impetigo', 'Varicose Veins'
]

def prepare_input(symptom_texts):
    embeddings = []
    for text in symptom_texts:
        embedding = biobert.sentence_vector(text).cpu().numpy()
        embeddings.append(embedding)

    embeddings = np.array(embeddings)
    processed_input = np.expand_dims(embeddings, axis=1)
    return processed_input

def predict_disease(input_texts):
    processed_input = prepare_input(input_texts)
    features = feature_extractor.predict(processed_input)
    predictions = svm_model.predict(features)
    predicted_diseases = [valid_diseases[label] for label in predictions]
    return predicted_diseases
