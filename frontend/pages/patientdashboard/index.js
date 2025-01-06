import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import styles from '/styles/Dashboard.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BloodPressureChart from '@/components/Bloodpressurechart';
import BloodSugarChart from '@/components/BloodSugarChart';
import DataTable from 'react-data-table-component'; // Import the library

const Dashboard = ({ patientData, bloodpressure1, bloodsuagar1 }) => {
  const [activeTab, setActiveTab] = useState('home'); // State to track active tab
  const { data: session, status } = useSession();
  const [patientInfo, setPatientInfo] = useState(patientData[0]);
 console.log(patientData);
  const handleTabClick = (tab) => setActiveTab(tab);

  // Define columns for blood pressure table
  const bloodPressureColumns = [
    {
      name: 'Date',
      selector: (row) => row.CreatedDate,
      sortable: true,
    },
    {
      name: 'Blood Pressure',
      selector: (row) => `${row.Systolic}/${row.Diastolic} mmHg`,
      sortable: true,
    },
    {
      name: 'Created By',
      selector: (row) => row.CreatorName,
    },
    {
      name: 'Action',
      cell: () => <button onClick={()=>handleBloodPressureChange()}>Action</button>,
    },
  ];

  // Define columns for blood sugar table
  const bloodSugarColumns = [
    {
      name: 'Date',
      selector: (row) => row.CreatedDate,
      sortable: true,
    },
    {
      name: 'Measurement',
      selector: (row) => row.BloodSugarLevel,
    },
    {
      name: 'Created By',
      selector: (row) => row.CreatorName,
    },
    {
      name: 'Value',
      cell: () => <button onClick={()=>handleBloodPressureChange()}>Action</button>,
    },
  ];
function handleBloodPressureChange() {


  alert('hello')
}
  return (
    <>
      <Header />
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
            <div>
              <h3>Your Information</h3>
              <p><strong>Name:</strong> {patientInfo.name}</p>
              <p><strong>Email:</strong> {patientInfo.email}</p>
              <p><strong>Address:</strong> {patientInfo.address}</p>
              <p><strong>Phone:</strong> {patientInfo.phone}</p>
              <p><strong>Date of Birth:</strong> {patientInfo.dob}</p>
            </div>
          )}

          {activeTab === 'readings' && (
            <>
              <div>
                <h3>Blood Pressure Readings</h3>
                <DataTable
                  columns={bloodPressureColumns}
                  data={bloodpressure1}
                  pagination
                  striped
                  highlightOnHover
                  responsive
                  paginationPerPage={5}
                />
              </div>

              <div>
                <h3>Blood Sugar Readings</h3>
                <DataTable
                  columns={bloodSugarColumns}
                  data={bloodsuagar1}
                  pagination
                  striped
                  highlightOnHover
                  responsive
                  paginationPerPage={5}
                />
              </div>

              <div className={styles.chartscontainer}>
                <div className={styles.chart}>
                  <BloodPressureChart bloodpressure1={bloodpressure1} />
                </div>
                <div className={styles.chart}>
                  <BloodSugarChart bloodsugar1={bloodsuagar1} />
                </div>
              </div>
            </>
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
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const id = session.user.id;

  try {
    const response = await fetch(`http://127.0.0.1:8000/getPatient/?patientid=${id}`);
    const response1 = await fetch(`http://localhost:3000/api/getreadings/${id}`);

    if (!response.ok || !response1.ok) {
      return { notFound: true };
    }

    const patientData = await response.json();
    const blood = await response1.json();
    const bloodpressure1 = blood.bloodpressure.result;
    const bloodsuagar1 = blood.bloodsugar.result;

    return {
      props: { patientData, bloodpressure1, bloodsuagar1 },
    };
  } catch (error) {
    console.error('Error fetching patient data:', error);
    return { notFound: true };
  }
}

export default Dashboard;
