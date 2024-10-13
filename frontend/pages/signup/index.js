// pages/signup.js

import { useState } from 'react';

import styles from '/styles/Signup.module.css';

export default function SignupPage() {
  const [isDoctor, setIsDoctor] = useState(false);

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
          <input type="password" placeholder="Password" className={styles.input} />
          {isDoctor && (
            <input type="text" placeholder="Specialization" className={styles.input} />
          )}
          <button type="submit" className={styles.signupBtn}>SIGN UP</button>
        </form>
        
      
      </div>
    </div>
  );
}
