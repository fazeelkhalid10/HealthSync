// pages/MainPages.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
