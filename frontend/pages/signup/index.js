// pages/signup.js

import { useState } from 'react';

import styles from '/styles/Signup.module.css';

export default function SignupPage() {
  const [isDoctor, setIsDoctor] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [disableSignup, setDisableSignup] = useState(false);

  //const [usernameError, setUsernameError] = useState('');
  const [username, setUsername] = useState('');
  const handleUsernameChange = async (e) => {
    const value = e.target.value;
    setUsername(value);

    // Make an API call to check if the username already exists
    if (value) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/getUsername/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: value }),
        });

        const data = await response.json();

        // Use 'result' field from the API response
        if (data.result) {
          setUsernameError('Username already exists');
          setDisableSignup(true);
        } else {
          setUsernameError('');
          setDisableSignup(false);// Clear the error if username doesn't exist
        }
      } catch (error) {
        console.error('Error checking username:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
       <div className={styles.left}>
            {/* Add your logo and description here */}
            <img src="/images.jpg" alt="HealthSync Logo" className={styles.logo} /> {/* Replace with your logo path */}
            <h2 className={styles.healthSyncTitle}>Welcome to HealthSync</h2>
            <p className={styles.healthSyncDescription}>
              Your trusted partner in healthcare management. Connect with doctors and take control of your health.
            </p>
          </div>
      <div className={styles.right}>
        <h1 className={styles.title}>HealthSync</h1>
        <div className={styles.toggle}>
          <button
            className={`${styles.tabButton} ${!isDoctor ? styles.activeTab : ''}`}
            onClick={() => setIsDoctor(false)}

          >
            Sign Up as Patient
          </button>
          <button
            className={`${styles.tabButton} ${isDoctor ? styles.activeTab : ''}`}
            onClick={() => setIsDoctor(true)}
          >
            Sign Up as Doctor
          </button>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="text" placeholder="Phone no eg 0300XXXXXXX" className={styles.input} />

          <input
        type="text"
        placeholder="User Name"
        className={styles.input}
        value={username}
        onChange={handleUsernameChange} // Call handleUsernameChange on input change
      />
{usernameError && <p>Already Exist!!</p>}
          <input type="password" placeholder="Password" className={styles.input} />
          {isDoctor && (
            <select className={styles.input} placeholder="Specialization">
            <option value="" disabled selected>Select Specialization</option>
            <option value="Allergist">Allergist</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Endocrinologist">Endocrinologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Hepatologist">Hepatologist</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Osteopathic">Osteopathic</option>
            <option value="Otolaryngologist">Otolaryngologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Phlebologist">Phlebologist</option>
            <option value="Pulmonologist">Pulmonologist</option>
            <option value="Rheumatologist">Rheumatologist</option>
            <option value="Tuberculosis">Tuberculosis</option>
          </select>
          
          
          )}
           {isDoctor && (
           
           <input type="text" placeholder="City" className={styles.input} />
          
          
          )}
         <button type="submit" className={styles.signupBtn} disabled={disableSignup}>
  SIGN UP
</button>
        </form>
        
      
      </div>
    </div>
  );
}
