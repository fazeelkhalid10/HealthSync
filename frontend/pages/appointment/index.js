import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <Link href="mailto:contact@example.com">HealthSync@gmail.com</Link>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>zero three three one , do aand aik lund</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <Link href="#" className="twitter"><i className="bi bi-twitter-x"></i></Link>
              <Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
              <Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link>
              <Link href="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>

        <div className="branding">
          <div className="container d-flex justify-content-between">
            <nav id="navmenu" className="navmenu">
              <Link href="/" className="logo d-flex align-items-center">
                <h1 className="sitename">HealthSync</h1>
              </Link>
              <ul className="d-flex align-items-center justify-content: flex-end">
                <li><Link href="#hero" className="active">Home</Link></li>
                <li><Link href="/DiseaseDetection.js">Disease Detection</Link></li>
                <li><Link href="#services">Find Doctor</Link></li>
                <li><Link href="#departments">HealthTips</Link></li>
                <li><Link href="#doctors">ChatBot</Link></li>
                <li className="dropdown">
                  <Link href="#"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link href="#">Dropdown 1</Link></li>
                    <li className="dropdown">
                      <Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                      <ul>
                        <li><Link href="#">Deep Dropdown 1</Link></li>
                        <li><Link href="#">Deep Dropdown 2</Link></li>
                        <li><Link href="#">Deep Dropdown 3</Link></li>
                        <li><Link href="#">Deep Dropdown 4</Link></li>
                        <li><Link href="#">Deep Dropdown 5</Link></li>
                      </ul>
                    </li>
                    <li><Link href="#">Dropdown 2</Link></li>
                    <li><Link href="#">Dropdown 3</Link></li>
                    <li><Link href="#">Dropdown 4</Link></li>
                  </ul>
                </li>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="#appointment" className="cta-btn d-none d-sm-block">Make an Appointment</Link></li>
                <li><Link href="#account" className="cta-btn">Account</Link></li>
              </ul>
            </nav>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </div>
        </div>
      </header>
    <div className="bg-white">
      

      {/* Static Hero Section with Image */}
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('/slider3.jpg')", backgroundSize: "cover", backgroundPosition: "center -50px", minHeight: '80vh' }}>
        <div className="container mx-auto flex items-center h-full py-16"> {/* Reduced padding for slight upward movement */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Doctor<span className="text-blue-600"> Appointment</span> Online 
            </h1>
            <p className="text-lg mb-6 text-blue-600">
              A healthier tomorrow starts today
            </p>
            {/* Buttons Section */}
            <a 
              href="#" 
              className="relative inline-block bg-blue-600 text-white px-4 py-2 rounded overflow-hidden transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
            >
              <span className="absolute inset-0 bg-black transform translate-x-full transition duration-300 ease-in-out"></span>
              <span className="relative z-10">Get Appointment</span>
            </a>
            <a 
              href="#" 
              className="relative inline-block bg-blue-600 text-white px-4 py-2 rounded overflow-hidden transition duration-300 ease-in-out ml-4 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
            >
              <span className="absolute inset-0 bg-black transform translate-x-full transition duration-300 ease-in-out"></span>
              <span className="relative z-10">About Us</span>
            </a>
          </div>
        </div>
      </div>

      <main className="container mx-auto p-5">
        {/* New Container for How It Works and Cards */}
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
          <div className="flex flex-col md:flex-row justify-around mt-5">
            <div className="single-features text-center bg-gray-100 p-5 rounded-lg shadow-md">
              <div className="single-icon mb-2">
                <i className="icofont icofont-ambulance-cross text-3xl text-blue-600"></i>
              </div>
              <h3>Emergency Help</h3>
              <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
            </div>
            {/* You can add more features similarly here */}
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
