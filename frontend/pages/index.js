import Head from 'next/head';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ width: '100%', height: '500px', backgroundImage: 'url("/hero-bg.jpg")', backgroundSize: 'cover', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', color: 'white' }}>
          <h1>Welcome To HealthSync</h1>
          <p>Your Gateway to Accurate Disease Detection And Tailored Guidance</p>
        </div>
      </div>

     
    </div>
  );
}
