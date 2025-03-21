
import { useState } from 'react'
import { Mic, MicOff, AlertCircle, Check, ChevronDown, Loader } from 'lucide-react'
import styles from '../styles/DiseaseDetection.module.css'
import { useRouter } from 'next/router'

const diseases = [
  { value: 'flu', label: 'Flu' },
  { value: 'cold', label: 'Common Cold' },
  { value: 'malaria', label: 'Malaria' },
  { value: 'diabetes', label: 'Diabetes' },
  { value: 'hypertension', label: 'Hypertension' },
]

export default function DiseaseBody() {
  const [activeSection, setActiveSection] = useState('dropdown')
  const [selectedDisease, setSelectedDisease] = useState('')
  const [textInput, setTextInput] = useState('')
  const [voiceInput, setVoiceInput] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [Disease, setdisease] = useState('')
  const[search,setsearch]=useState();
  const router=useRouter();
  const diseaseToSpecialization = {
    'Fungal infection': ['Dermatologist'],
    'Allergy': ['Allergist'],
    'GERD': ['Gastroenterologist'],
    'Chronic cholestasis': ['Gastroenterologist'],
    'Drug reaction': ['Allergist', 'Internal Medicine'],
    'Peptic ulcer disease': ['Gastroenterologist'],
    'AIDS': ['Internal Medicine'],
    'Diabetes': ['Endocrinologist'],
    'Gastroenteritis': ['Gastroenterologist'],
    'Bronchial Asthma': ['Pulmonologist'],
    'Hypertension': ['Cardiologist'],
    'Migraine': ['Neurologist'],
    'Cervical spondylosis': ['Neurologist'],
    'Paralysis (brain hemorrhage)': ['Neurologist'],
    'Jaundice': ['Hepatologist'],
    'Malaria': ['Internal Medicine'],
    'Chicken pox': ['Pediatrician', 'Internal Medicine'],
    'Dengue': ['Internal Medicine'],
    'Typhoid': ['Internal Medicine'],
    'Hepatitis A': ['Hepatologist'],
    'Hepatitis B': ['Hepatologist'],
    'Hepatitis C': ['Hepatologist'],
    'Hepatitis D': ['Hepatologist'],
    'Hepatitis E': ['Hepatologist'],
    'Alcoholic hepatitis': ['Hepatologist'],
    'Tuberculosis': ['Pulmonologist'],
    'Common Cold': ['Otolaryngologist'],
    'Pneumonia': ['Pulmonologist'],
    'Dimorphic Hemorrhoids': ['Internal Medicine'],
    'Heart attack': ['Cardiologist'],
    'Varicose veins': ['Phlebologist'],
    'Hypothyroidism': ['Endocrinologist'],
    'Hyperthyroidism': ['Endocrinologist'],
    'Hypoglycemia': ['Endocrinologist'],
    'Osteoarthritis': ['Rheumatologist'],
    'Arthritis': ['Rheumatologist'],
    '(vertigo) Paroxysmal Positional Vertigo': ['Neurologist'],
    'Acne': ['Dermatologist'],
    'Urinary tract infection': ['Urologist'],
    'Psoriasis': ['Dermatologist'],
    'Impetigo': ['Dermatologist'],
};
const handleVoiceInput = () => {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    setErrorMessage('Voice input is not supported in this browser. Please use a modern browser like Chrome.');
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = 'en-US';
  recognition.interimResults = false; // Only return final results
  recognition.maxAlternatives = 1;

  if (!isListening) {
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setVoiceInput(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      setErrorMessage(`Voice recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  } else {
    recognition.stop();
    setIsListening(false);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitStatus('loading')
    setErrorMessage('')

    let input = ''
    switch (activeSection) {
      case 'dropdown':
        input = selectedDisease
       
        break
      case 'text':
        input = textInput
        console.log(input);
        break
      case 'voice':
        input = voiceInput
        console.log(input);
        break
    }

    if (!input) {
      setErrorMessage('Please provide input before submitting.')
      setSubmitStatus('idle')
      return
    }
    try {
    fetch(`/api/predict?symptoms=${encodeURIComponent(input)}`).then(res=>res.json()).then(data=>{
      setdisease(data.result[0]);
      setSubmitStatus('success');
      setsearch(diseaseToSpecialization[data.result[0]])
    });
     // const data = await response.json();
      //setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
    // Simulating an API call
  
      
    //  console.log('Form submitted:', { activeSection, input })
    
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Advanced Symptom Analysis</h2>

      <div className={styles.sectionButtons}>
        {['dropdown', 'text', 'voice'].map((section) => (
          <button
            key={section}
            className={`${styles.sectionButton} ${activeSection === section ? styles.active : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section === 'dropdown' && 'Select Disease'}
            {section === 'text' && 'Describe Symptoms'}
            {section === 'voice' && 'Voice Input'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {activeSection === 'dropdown' && (
          <div className={styles.formSection}>
            <label htmlFor="disease-dropdown" className={styles.label}>
              Select a Disease:
            </label>
            <div className={styles.selectWrapper}>
              <select
                id="disease-dropdown"
                name="disease-dropdown"
                className={styles.select}
                value={selectedDisease}
                onChange={(e) => setSelectedDisease(e.target.value)}
              >
                <option value="">Select a disease</option>
                {diseases.map((disease) => (
                  <option key={disease.value} value={disease.value}>
                    {disease.label}
                  </option>
                ))}
              </select>
              <ChevronDown className={styles.selectIcon} />
            </div>
          </div>
        )}

        {activeSection === 'text' && (
          <div className={styles.formSection}>
            <label htmlFor="text-input" className={styles.label}>
              Describe Your Symptoms:
            </label>
            <textarea
              id="text-input"
              name="text-input"
              placeholder="Enter your symptoms here..."
              className={styles.textarea}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              rows={5}
            />
          </div>
        )}

        {activeSection === 'voice' && (
          <div className={styles.formSection}>
            <label htmlFor="voice-input" className={styles.label}>
              Describe Your Symptoms Using Voice:
            </label>
            <div className={styles.voiceInputContainer}>
              <textarea
                id="voice-input"
                name="voice-input"
                placeholder="Your voice input will appear here..."
                value={voiceInput}
                readOnly
                className={styles.textarea}
                rows={5}
              />
              <button
                type="button"
                onClick={handleVoiceInput}
                className={`${styles.voiceButton} ${isListening ? styles.listening : ''}`}
              >
                {isListening ? <MicOff className={styles.icon} /> : <Mic className={styles.icon} />}
              </button>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className={styles.errorMessage}>
            <AlertCircle className={styles.icon} />
            {errorMessage}
          </div>
        )}

        <button type="submit" className={styles.submitButton} disabled={submitStatus === 'success'}>
          {submitStatus === 'loading' ? (
            <>
              <Loader className={`${styles.icon} ${styles.spinner}`} />
              Analyzing...
            </>
          ) : submitStatus === 'success' ? (
            <>
              <Check className={styles.icon} />
              Analysis Complete
            </>
          ) : (
            'Analyze Symptoms'
          )}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className={styles.resultCard}>
          <h3 className={styles.resultTitle}>Analysis Results</h3>
          <p className={styles.resultText}>
            Based on the provided information, our system has generated an initial analysis.
          </p>
          <p className={styles.resultText}>
            <strong>Predicted Condition: {Disease}</strong>
          </p>
          <p className={styles.resultText}>
            Please note that this is not a definitive diagnosis and should not replace professional medical advice.
            We recommend consulting with a healthcare professional for accurate diagnosis and treatment.
          </p>
          <button className={styles.doctorButton} onClick={()=>router.push(`/doctors/${search}`)}>
            Find a Suitable Doctor
          </button>
        </div>
      )}
    </div>
  )
}

