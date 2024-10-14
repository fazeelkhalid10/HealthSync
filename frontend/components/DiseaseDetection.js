// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function DiseaseDetection() {
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
    <>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <Link href="mailto:contact@example.com">HealthSync@gmail.com</Link>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>zero three three one , do aand aik lund</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <Link href="#" className="twitter"><i className="bi bi-twitter-x"></i></Link>
              <Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
              <Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link>
              <Link href="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>

        <div className="branding">
          <div className="container d-flex justify-content-between">
            <nav id="navmenu" className="navmenu">
              <Link href="/" className="logo d-flex align-items-center">
                <h1 className="sitename">HealthSync</h1>
              </Link>
              <ul className="d-flex align-items-center justify-content: flex-end">
                <li><Link href="#hero" >Home</Link></li>
                <li><Link href="#hero" className="active">Disease Detection</Link></li>
                <li><Link href="#services">Find Doctor</Link></li>
                <li><Link href="#departments">HealthTips</Link></li>
                <li><Link href="#doctors">ChatBot</Link></li>
                <li className="dropdown">
                  <Link href="#"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link href="#">Dropdown 1</Link></li>
                    <li className="dropdown">
                      <Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                      <ul>
                        <li><Link href="#">Deep Dropdown 1</Link></li>
                        <li><Link href="#">Deep Dropdown 2</Link></li>
                        <li><Link href="#">Deep Dropdown 3</Link></li>
                        <li><Link href="#">Deep Dropdown 4</Link></li>
                        <li><Link href="#">Deep Dropdown 5</Link></li>
                      </ul>
                    </li>
                    <li><Link href="#">Dropdown 2</Link></li>
                    <li><Link href="#">Dropdown 3</Link></li>
                    <li><Link href="#">Dropdown 4</Link></li>
                  </ul>
                </li>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="appointment" className="cta-btn d-none d-sm-block">Make an Appointment</Link></li>
                <li><Link href="#account" className="cta-btn">Account</Link></li>
              </ul>
            </nav>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </div>
        </div>
      </header>
      
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
      
      


      <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">HealthSync</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="#">Web Design</Link></li>
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Product Management</Link></li>
              <li><Link href="#">Marketing</Link></li>
              <li><Link href="#">Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li><Link href="#">Molestiae accusamus iure</Link></li>
              <li><Link href="#">Excepturi dignissimos</Link></li>
              <li><Link href="#">Suscipit distinctio</Link></li>
              <li><Link href="#">Dilecta</Link></li>
              <li><Link href="#">Sit quas consectetur</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li><Link href="#">Ipsam</Link></li>
              <li><Link href="#">Laudantium dolorum</Link></li>
              <li><Link href="#">Dinera</Link></li>
              <li><Link href="#">Trodelas</Link></li>
              <li><Link href="#">Flexo</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Medilab</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
     
    </>
  );
}
