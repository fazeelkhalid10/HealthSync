import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Upper strip with email and logos */}
      <div style={{ backgroundColor: '#4169E1', color: 'white', padding: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>HealthSync@gmail.com.com</div>
          <div>zero three three one , do aand aik lund</div>
        </div>
      </div>

      {/* Navbar */}
      <nav style={{ backgroundColor: '#FFFFFF', padding: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/path-to-your-logo.jpg" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#0000FF' }}>HealthSync</span>
          <div style={{ flex: 1 }}></div> {/* Spacer */}
          <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 10px' }}><a href="#home" style={{ color: '#A9A9A9' }}>Home</a></li>
            <li style={{ margin: '0 10px' }}><a href="#disease-detection" style={{ color: '#A9A9A9' }}>Disease Detection</a></li>
            <li style={{ margin: '0 10px' }}><a href="#find-doctor" style={{ color: '#A9A9A9' }}>Find Doctor</a></li>
            <li style={{ margin: '0 10px' }}><a href="#health-tips" style={{ color: '#A9A9A9' }}>Health Tips</a></li>
            <li style={{ margin: '0 10px' }}><a href="#chatbot" style={{ color: '#A9A9A9' }}>ChatBot</a></li>
            <li style={{ margin: '0 10px' }}><a href="#services" style={{ color: '#A9A9A9' }}>Services</a></li>
            <li style={{ margin: '0 10px' }}><a href="#contact" style={{ color: '#A9A9A9' }}>Contact</a></li>
            <li style={{ margin: '0 10px' }}>
              <button style={{ backgroundColor: '#4169E1', color: 'white' }}>Make An Appointment</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page cover photo */}
      <div style={{ width: '100%', height: '500px', backgroundImage: 'url("/hero-bg.jpg")', backgroundSize: 'cover', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', color: 'white' }}>
          <h1>Welcome To HealthSync</h1>
          <p>Your Gateway to Accurate Disease Detection And Tailored Guidance</p>
        </div>
      </div>

      {/* Why Choose HealthSync section */}
      
    </div>
  );
}
