import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Upper strip with email and logos */}
      <div style={{ backgroundColor: '#0000FF', color: 'white', padding: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>HealthSync@gmail.com</div>
          <div>zero three three one , do aand aik lund</div>
          <div> {/* Insert small logos here */} </div>
        </div>
      </div>

      {/* Navbar */}
      <nav style={{ backgroundColor: '#FFFFFF', padding: '15px' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
          <li><a href="#home" style={{ color: '#0000FF' }}>Home</a></li>
          <li><a href="#disease-detection" style={{ color: '#0000FF' }}>Disease Detection</a></li>
          <li><a href="#find-doctor" style={{ color: '#0000FF' }}>Find Doctor</a></li>
          <li><a href="#health-tips" style={{ color: '#0000FF' }}>Health Tips</a></li>
          <li><a href="#chatbot" style={{ color: '#0000FF' }}>ChatBot</a></li>
          <li><a href="#services" style={{ color: '#0000FF' }}>Services</a></li>
          <li><a href="#contact" style={{ color: '#0000FF' }}>Contact</a></li>
          <li>
            <button style={{ backgroundColor: '#FF0000', color: 'white' }}>Make An Appointment</button>
          </li>
        </ul>
      </nav>

      {/* Page cover photo */}
      <div style={{ width: '100%', height: '500px', backgroundImage: 'url("/hero-bg.jpg")', backgroundSize: 'cover' }}></div>
    </div>
  );
}
