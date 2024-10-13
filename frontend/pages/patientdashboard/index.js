// pages/dashboard.js

import { useState } from 'react';
import styles from '/styles/Dashboard.module.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home'); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sample patient information
  const patientInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Springfield, USA',
    phone: '(123) 456-7890',
    dob: '1990-01-01',
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
        {activeTab === 'home' && (
          <div style={{ padding: '20px' }}>
            <h3>Your Information</h3>
            <div style={{ backgroundColor: '#f0f8ff', padding: '15px', borderRadius: '8px' }}>
              <p><strong>Name:</strong> {patientInfo.name}</p>
              <p><strong>Email:</strong> {patientInfo.email}</p>
              <p><strong>Address:</strong> {patientInfo.address}</p>
              <p><strong>Phone:</strong> {patientInfo.phone}</p>
              <p><strong>Date of Birth:</strong> {patientInfo.dob}</p>
            </div>
          </div>
        )}
        {activeTab === 'readings' && (
          <div>
            <h3>Your Readings</h3>
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
            <p>Plan: Regular Checkup</p>
            <p>Next Appointment: 2024-10-15</p>
          </div>
        )}
        {activeTab === 'appointments' && (
          <div>
            <h3>Your Appointments</h3>
            <p>No upcoming appointments.</p>
          </div>
        )}
        {activeTab === 'profile' && (
          <div>
            <h3>Your Profile</h3>
            <p>Name: {patientInfo.name}</p>
            <p>Email: {patientInfo.email}</p>
            <p>Address: {patientInfo.address}</p>
            <p>Phone: {patientInfo.phone}</p>
            <p>Date of Birth: {patientInfo.dob}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
