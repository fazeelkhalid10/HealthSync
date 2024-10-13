// pages/login.js

import Link from 'next/link';
import styles from '/styles/login.module.css';
import { useState } from 'react';
export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/images.jpg" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Welcome to Healthsync</h1>
        <p className={styles.subtitle}>Please login to your account</p>
        <form className={styles.form}>
          <input type="text" placeholder="Username" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
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
