import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '/styles/appointment.module.css';

export default function AppointmentBody() {
  // Define the state variables
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    date: '',
    doctor: '',
    description: '',
    name: '',
    phone: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    
      <div className="bg-white">
        {/* Hero Section */}
        <div className={styles['hero-bg']} style={{ backgroundImage: "url('/slider3.jpg')" }}>
          <div className={`container mx-auto ${styles['hero-container']}`}>
            <div className="w-full md:w-1/2">
              <h1 className={`${styles.heroHeading} ${styles.heroHeadingMd}`}>
                <span className={styles.heroText}>Book Your Doctor</span>
                <span className={styles.heroTextBlue}> Appointment</span>
                <span className={styles.heroText}> Online</span>
              </h1>
              <p className="text-lg mb-6 text-blue-600">
                A healthier tomorrow starts today
              </p>
              <div className="button-group flex">
                <Link href="/MakeAppointment">
                  <a className={`${styles['hero-button']}`}>Get Appointment</a>
                </Link>
                <Link href="/about">
                  <a className={`${styles['hero-button']} ${styles['about-button']}`}>About Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto p-5">
          {/* Form Section */}
          <section className="my-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Search for a Doctor</h2>
            <div className="flex justify-center">
              <form className="w-full max-w-3xl">
                <div className="flex items-center border-b border-blue-500 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Doctor name or specialty"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Appointment Form */}
          <section id="appointment" className="my-10">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Make an Appointment</h2>
              <div className="flex justify-center">
                <form className={styles['appointment-container']} onSubmit={handleSubmit}>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className={styles['appointment-input']}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="doctor">Doctor:</label>
                  <input
                    type="text"
                    id="doctor"
                    name="doctor"
                    placeholder="Doctor's Name"
                    className={styles['appointment-input']}
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Describe your symptoms"
                    className={styles['appointment-input']}
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className={styles['appointment-input']}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className={styles['appointment-input']}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <button type="submit" className={styles['appointment-submit']}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    
  );
}
