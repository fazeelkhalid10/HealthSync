import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import styles from '/styles/appointment.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

function MakeAppointment() {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    date: '',
    doctor: '',
    description: '',
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
       <Head>
        <title>MakeAppointment - HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

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
                <a href="#" className={`${styles['hero-button']}`}>
                  Get Appointment
                </a>
                <a href="#" className={`${styles['hero-button']} ${styles['about-button']}`}>
                  About Us
                </a>
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
                    <MagnifyingGlassIcon className="h-5 w-5" />
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
          <section className="my-10">
          <div className="bg-blue-600 p-5 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">How It Works!</h2>
            <div className="flex flex-col md:flex-row justify-around mt-5">
  <div className="bg-white p-5 rounded-lg shadow-md text-center text-blue-600 mx-4 mb-4">
    <h3 className="font-bold">1. Find A Doctor</h3>
    <p>Discover skilled doctors based on specialization and location.</p>
  </div>
  <div className="bg-white p-5 rounded-lg shadow-md text-center text-blue-600 mx-4 mb-4">
    <h3 className="font-bold">2. Book Appointment</h3>
    <p>Effortlessly book appointments at your convenience.</p>
  </div>
  <div className="bg-white p-5 rounded-lg shadow-md text-center text-blue-600 mx-4 mb-4">
    <h3 className="font-bold">3. Get Services</h3>
    <p>Receive personalized healthcare services tailored to your needs.</p>
  </div>
</div>

          </div>
        </section>
        <section className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Features</h2>
          <div className="flex flex-col md:flex-row justify-around gap-5 mt-5">
  <div className="single-features text-center bg-gray-100 p-5 rounded-lg shadow-md w-full md:w-1/3">
    <div className="single-icon mb-2">
      <i className="icofont icofont-ambulance-cross text-3xl text-blue-600"></i>
    </div>
    <h3 className="text-lg font-bold">Emergency Help</h3>
    <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
  </div>

  <div className="single-features text-center bg-gray-100 p-5 rounded-lg shadow-md w-full md:w-1/3">
    <div className="single-icon mb-2">
      <i className="icofont icofont-ambulance-cross text-3xl text-blue-600"></i>
    </div>
    <h3 className="text-lg font-bold">Jo aik baar ayga baar baar ayga</h3>
    <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
  </div>
  <div className="single-features text-center bg-gray-100 p-5 rounded-lg shadow-md w-full md:w-1/3">
    <div className="single-icon mb-2">
      <i className="icofont icofont-ambulance-cross text-3xl text-blue-600"></i>
    </div>
    <h3 className="text-lg font-bold">Hamsa koi nhi</h3>
    <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
  </div>
  {/* Add more feature cards here */}
</div>

        </section>
        </main>
      </div>
      <Footer />
      
    </>
  );
}

export default MakeAppointment;
