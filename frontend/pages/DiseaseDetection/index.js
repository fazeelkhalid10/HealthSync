// pages/DiseaseDetection/index.js
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DiseaseBody from '../../components/DiseaseBody';

export default function DiseaseDetection() {
  return (
    <div>
      <Head>
        <title>Disease Detection - HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DiseaseBody />
      <Footer />
    </div>
  );
}
