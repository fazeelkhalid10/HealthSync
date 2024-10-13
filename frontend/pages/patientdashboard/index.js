// pages/dashboard.js

import { useState } from 'react';
import styles from '/styles/Dashboard.module.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home'); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Patient Dashboard</h2>
        <ul className={styles.menu}>
          <li
            className={activeTab === 'home' ? styles.active : ''}
            onClick={() => handleTabClick('home')}
          >
            Home
          </li>
          <li
            className={activeTab === 'readings' ? styles.active : ''}
            onClick={() => handleTabClick('readings')}
          >
            Readings
          </li>
          <li
            className={activeTab === 'treatment' ? styles.active : ''}
            onClick={() => handleTabClick('treatment')}
          >
            Treatment Plans
          </li>
          <li
            className={activeTab === 'appointments' ? styles.active : ''}
            onClick={() => handleTabClick('appointments')}
          >
            Appointments
          </li>
          <li
            className={activeTab === 'profile' ? styles.active : ''}
            onClick={() => handleTabClick('profile')}
          >
            Profile
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        {activeTab === 'home' && <h3>Welcome to your Dashboard!</h3>}
        {activeTab === 'readings' && (
          <div>
            <h3>Your Readings</h3>
            {/* Example table for readings */}
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Measurement</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-10-01</td>
                  <td>Blood Pressure</td>
                  <td>120/80 mmHg</td>
                </tr>
                <tr>
                  <td>2024-10-02</td>
                  <td>Heart Rate</td>
                  <td>72 bpm</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'treatment' && (
          <div>
            <h3>Your Treatment Plans</h3>
            {/* Example treatment plans content */}
            <p>Plan: Regular Checkup</p>
            <p>Next Appointment: 2024-10-15</p>
            {/* Add more details as needed */}
          </div>
        )}
        {activeTab === 'appointments' && (
          <div>
            <h3>Your Appointments</h3>
            {/* Example appointments content */}
            <p>No upcoming appointments.</p>
          </div>
        )}
        {activeTab === 'profile' && (
          <div>
            <h3>Your Profile</h3>
            {/* Example profile content */}
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            {/* Add more profile details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
