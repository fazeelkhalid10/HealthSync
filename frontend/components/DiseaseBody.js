import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function DiseaseBody() {
  const [activeSection, setActiveSection] = useState('dropdown'); // Initialize the active section state

  const [voiceInput, setVoiceInput] = useState('');

  // Voice Recognition Functionality
  const startVoiceRecognition = () => {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = (event) => {
          setVoiceInput(event.results[0][0].transcript);
      };

      recognition.onerror = (event) => {
          alert('Error occurred in recognition: ' + event.error);
      };
  };
  return (    
      <div className="symptom-form-container">
            <h2>Symptom Input Form</h2>

            {/* Section Heading Buttons */}
            <div className="form-headings">
                <button onClick={() => setActiveSection('dropdown')}>Option 1: Select from Dropdown</button>
                <button onClick={() => setActiveSection('text')}>Option 2: Enter Symptoms via Text</button>
                <button onClick={() => setActiveSection('voice')}>Option 3: Use Voice Input</button>
            </div>

            {/* Conditional Rendering Based on Active Section */}
            {activeSection === 'dropdown' && (
                <div className="form-section">
                    <h3>Select from Dropdown</h3>
                    <label htmlFor="disease-dropdown">Select a Disease:</label>
                    <select id="disease-dropdown" name="disease-dropdown">
                        <option value="">Select a disease</option>
                        <option value="flu">Flu</option>
                        <option value="cold">Common Cold</option>
                        <option value="malaria">Malaria</option>
                        <option value="diabetes">Diabetes</option>
                        <option value="hypertension">Hypertension</option>
                        {/* Add more options as needed */}
                    </select>
                    <button type="submit">Submit</button>
                </div>
            )}

            {activeSection === 'text' && (
                <div className="form-section">
                    <h3>Enter Symptoms via Text</h3>
                    <label htmlFor="text-input">Enter Symptoms:</label>
                    <input type="text" id="text-input" name="text-input" placeholder="Enter symptoms here..." />
                    <button type="submit">Submit</button>
                </div>
            )}

            {activeSection === 'voice' && (
                <div className="form-section">
                    <h3>Use Voice Input</h3>
                    <label htmlFor="voice-input">Press the button and speak:</label>
                    <input
                        type="text"
                        id="voice-input"
                        name="voice-input"
                        placeholder="Voice input will appear here..."
                        value={voiceInput}
                        readOnly
                    />
                    <button type="button" onClick={startVoiceRecognition}>Start Voice Input</button>
                    <button type="submit">Submit</button>
                </div>
            )}
        </div>
  );
}
