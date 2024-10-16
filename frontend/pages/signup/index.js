// pages/signup.js

import { useEffect, useState } from 'react';
import styles from '/styles/Signup.module.css';

export default function SignupPage() {
  const [isDoctor, setIsDoctor] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [disableSignup, setDisableSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [city, setCity] = useState('');
  const [specialization, setSpecialization] = useState('');

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

        if (data.result) {
          setUsernameError('Username already exists');
          setDisableSignup(true);
        } else {
          setUsernameError('');
          setDisableSignup(false); // Clear the error if username doesn't exist
        }
      } catch (error) {
        console.error('Error checking username:', error);
      }
    }
  };
  useEffect(() => {
    // Clear the form fields when isDoctor changes
    setUsername('');
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setDateOfBirth('');
    setCity('');
    setSpecialization('');
    setUsernameError('');
    setDisableSignup(false);
  }, [isDoctor]);
  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      phone,
      username,
      password,
      city,
      specialization,
      date_of_birth: dateOfBirth,
    };

    const apiUrl = isDoctor ? 'http://127.0.0.1:8000/signupDoctor/' : 'http://127.0.0.1:8000/insertpatient/';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle successful signup (e.g., redirect to login)
      } else {
        // Handle error response
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/images.jpg" alt="HealthSync Logo" className={styles.logo} />
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

        <form className={styles.form} onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone no eg 0300XXXXXXX"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="User Name"
            className={styles.input}
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {usernameError && <p className={styles.error}>{usernameError}</p>}
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isDoctor && (
            <>
              <select
                className={styles.input}
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              >
                <option value="" disabled>Select Specialization</option>
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
             
            </>
          )}
          {!isDoctor && (
            <input
              type="date"
              placeholder="Date of Birth"
              className={styles.input}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          )}
           <input
                type="text"
                placeholder="Adress"
                className={styles.input}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
          <button type="submit" className={styles.signupBtn} disabled={disableSignup}>
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}
