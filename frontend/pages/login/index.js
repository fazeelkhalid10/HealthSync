// pages/login.js

import Link from 'next/link';
import styles from '/styles/login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import { signIn } from 'next-auth/react'; // Import signIn from NextAuth

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize router

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError('Incorrect username or password.'); // Set error message if authentication fails
    } else {
      // Redirect to home page or dashboard if login is successful
      router.push('/'); 
    }
  };

  const closeError = () => {
    setError(''); // Function to close the error message
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/images.jpg" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Welcome to Healthsync</h1>
        <p className={styles.subtitle}>Please login to your account</p>
        {error && (
          <div className={styles.errorBar}>
            <span className={styles.errorMessage}>{error}</span>
            <button className={styles.closeButton} onClick={closeError}>
              &times; {/* Close icon */}
            </button>
          </div>
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            value={username} // Bind input value to state
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password} // Bind input value to state
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <button type="submit" className={styles.loginBtn}>LOG IN</button>
        </form>
        <a href="#" className={styles.forgot}>Forgot password?</a>
        <div className={styles.createAccount}>
          <p>Don't have an account?</p>
          <Link href="/signup" className={styles.createBtn}>
            Create New
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <h2>HealthSync</h2>
        <p>Your HealthCare Partner.</p>
      </div>
    </div>
  );
}
