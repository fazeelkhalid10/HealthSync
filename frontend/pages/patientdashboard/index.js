import React, { useState } from 'react';
import { useSession, getSession, signOut } from 'next-auth/react';
import styles from '/styles/Dashboard.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BloodPressureChart from '@/components/Bloodpressurechart';
import BloodSugarChart from '@/components/BloodSugarChart';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import { Edit, LogOut,Ban } from 'lucide-react';

const Dashboard = ({ patientData, bloodpressure1, bloodsugar1 }) => {
  const [activeTab, setActiveTab] = useState('home');
  const { data: session, status } = useSession();
  const [patientInfo, setPatientInfo] = useState(patientData[0]);

  const handleTabClick = (tab) => setActiveTab(tab);

  // Sample activity log data (replace with real data in production)
  const activityLog = [
    { date: '2023-05-15', activity: 'Blood pressure reading added', details: '120/80 mmHg' },
    { date: '2023-05-14', activity: 'Appointment scheduled', details: 'Annual checkup on 2023-06-01' },
    { date: '2023-05-12', activity: 'Blood sugar reading added', details: '95 mg/dL' },
    { date: '2023-05-10', activity: 'Treatment plan updated', details: 'Medication dosage adjusted' },
    { date: '2023-05-08', activity: 'Profile information updated', details: 'Phone number changed' },
  ];

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
      cell: () => <button className={styles.actionButton} onClick={() => handleBloodPressureChange()}>View</button>,
    },
  ];

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
      name: 'Action',
      cell: () => <button className={styles.actionButton} onClick={() => handleBloodSugarChange()}>View</button>,
    },
  ];

  function handleBloodPressureChange() {
    alert('Blood Pressure Details');
  }

  function handleBloodSugarChange() {
    alert('Blood Sugar Details');
  }

  function handleEditProfile() {
    alert('Edit Profile');
  }

  function handleEditPhoto() {
    alert('Edit Photo');
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 style={{ color: '#1977cc', marginBottom: '20px' }}>Dashboard</h2>
          <ul className={styles.menu}>
            <li className={activeTab === 'home' ? styles.active : ''} onClick={() => handleTabClick('home')}>Home</li>
            <li className={activeTab === 'readings' ? styles.active : ''} onClick={() => handleTabClick('readings')}>Readings</li>
            <li className={activeTab === 'treatment' ? styles.active : ''} onClick={() => handleTabClick('treatment')}>Treatment Plans</li>
            <li className={activeTab === 'appointments' ? styles.active : ''} onClick={() => handleTabClick('appointments')}>Appointments</li>
            <li className={activeTab === 'profile' ? styles.active : ''} onClick={() => handleTabClick('profile')}>Profile</li>
          </ul>
        </div>

        <div className={styles.content}>
          {activeTab === 'home' && (
            <>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Welcome, {patientInfo.name}</h3>
                <p>Here's a quick overview of your health information and upcoming appointments.</p>
                {/* Add some quick stats or upcoming appointment info here */}
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Recent Activity</h3>
                <ul className={styles.activityLog}>
                  {activityLog.map((activity, index) => (
                    <li key={index} className={styles.activityItem}>
                      <div className={styles.activityDate}>{activity.date}</div>
                      <div className={styles.activityContent}>
                        <strong>{activity.activity}</strong>
                        <p>{activity.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {activeTab === 'readings' && (
            <>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Blood Pressure Readings</h3>
                {bloodpressure1 ? (
                  <DataTable
                    columns={bloodPressureColumns}
                    data={bloodpressure1}
                    pagination
                    highlightOnHover
                    responsive
                    paginationPerPage={5}
                  />
                ) : (
                  <p>No Blood pressure readings available.</p>
                )}
              </div>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Blood Sugar Readings</h3>
                {bloodsugar1 ? (
                  <DataTable
                    columns={bloodSugarColumns}
                    data={bloodsugar1}
                    pagination
                    highlightOnHover
                    responsive
                    paginationPerPage={5}
                  />
                ) : (
                  <p>No Blood Sugar readings available.</p>
                )}
              </div>

              <div className={styles.chartsContainer}>
                {bloodpressure1 && (
                  <div className={styles.chart}>
                    <h4 style={{ color: '#1977cc', marginBottom: '10px' }}>Blood Pressure Trend</h4>
                    <BloodPressureChart bloodpressure1={bloodpressure1} />
                  </div>
                )}
                {bloodsugar1 && (
                  <div className={styles.chart}>
                    <h4 style={{ color: '#1977cc', marginBottom: '10px' }}>Blood Sugar Trend</h4>
                    <BloodSugarChart bloodsugar1={bloodsugar1} />
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'treatment' && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Your Treatment Plans</h3>
              <div className={styles.appointmentCard}>
                <h4>Regular Checkup</h4>
                <p>Next Appointment: October 15, 2024</p>
                <p>Doctor: Dr. Smith</p>
                <button className={styles.actionButton}>View Details</button>
              </div>
              {/* Add more treatment plans as needed */}
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Your Appointments</h3>
              <div className={styles.appointmentCard}>
                <h4>Annual Physical</h4>
                <p>Date: September 5, 2024</p>
                <p>Time: 10:00 AM</p>
                <p>Doctor: Dr. Johnson</p>
                <button className={styles.actionButton}>Reschedule</button>
              </div>
              {/* Add more appointments or a message if no appointments */}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className={styles.profileContainer}>
              <div className={styles.profileCard}>
                <div className={styles.profileImageContainer}>
                  <Image
                    src="/doc1.png?height=200&width=200"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className={styles.profileImage}
                  />
                  <button className={styles.editPhotoButton} onClick={handleEditPhoto}>
                    <Edit size={16} />
                    
                  </button>
                </div>
                <h3>{patientInfo.name}</h3>
                <p>{patientInfo.email}</p>
              </div>
              <div className={styles.profileDetails}>
                <h3 className={styles.cardTitle}>Your Profile</h3>
                <div className={styles.profileInfo}>
                  <p><strong>Name:</strong> {patientInfo.name}</p>
                  <p><strong>Email:</strong> {patientInfo.email}</p>
                  <p><strong>Address:</strong> {patientInfo.address}</p>
                  <p><strong>Phone:</strong> {patientInfo.phone}</p>
                  <p><strong>Date of Birth:</strong> {patientInfo.dob}</p>
                </div>
                <button className={styles.actionButton} onClick={handleEditProfile}>Edit Profile</button>
              </div>
              <button className={styles.signOutButton} onClick={handleSignOut}>
                <LogOut size={16} />
                Sign Out
              </button>

              <button className={styles.subOutButton} onClick={handleSignOut}>
                <Ban size={16} />
                Cancel Subscription
              </button>
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
    const bloodsugar1 = blood.bloodsugar.result;

    return {
      props: { patientData, bloodpressure1, bloodsugar1 },
    };
  } catch (error) {
    console.error('Error fetching patient data:', error);
    return { notFound: true };
  }
}

export default Dashboard;

