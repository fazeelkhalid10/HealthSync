'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingBar from '@/components/LoadingBar'
import styles from './DoctorPage.module.css'
import { useRouter } from 'next/router'



export default function Doctor() {
  const router = useRouter()
  const id = router.query.id;
  const [doctorData, setDoctorData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bookedAppointments, setBookedAppointments] = useState()

  useEffect(() => {
    if (id) {
      fetch(`/api/getDoctorfordisease/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDoctorData(data.result)
          console.log(data.result)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          setLoading(false)
        })
    }
  }, [id])

  const handleBookAppointment = (doctorName) => {
    setBookedAppointments(prev => new Set(prev).add(doctorName))
    alert(`Appointment booked with Dr. ${doctorName}`)
  }

  return (
    <div className={styles.container}>
      <Header />
      {loading && <LoadingBar />}
      <main className={styles.main}>
        <h1 className={styles.title}>Doctor Information</h1>
        {loading ? (
          <div className={styles.skeletonGrid}>
            {[...Array(3)].map((_, index) => (
              <div key={index} className={styles.skeletonCard}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonName}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonButton}></div>
              </div>
            ))}
          </div>
        ) : doctorData && doctorData.length > 0 ? (
          <div className={styles.doctorGrid}>
            {doctorData.map((doctor, index) => (
              <div key={index} className={styles.doctorCard}>
                <div className={styles.doctorImageContainer}>
                  <Image
                    src={doctor.ImageUrl || `/doctors.png`}
                    alt={`Dr. ${doctor.Name}`}
                    width={200}
                    height={200}
                    className={styles.doctorImage}
                  />
                </div>
                <h2 className={styles.doctorName}>{doctor.Name}</h2>
                <p><strong>Specialization:</strong> {doctor.Specialization}</p>
                <p><strong>Phone:</strong> {doctor.Phone}</p>
                <p><strong>Email:</strong> {doctor.Email}</p>
                <button
                  onClick={() => handleBookAppointment(doctor.Name)}
                  //disabled={bookedAppointments.has(doctor.Name)}
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    color: 'white',
                    backgroundColor: false ? '#4caf50' : '#0066cc',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: false ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  {false? 'Appointment Booked' : 'Book Appointment'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noResults}>No doctors found for this query.</p>
        )}
      </main>
      <Footer />
    </div>
  )
}
