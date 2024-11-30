
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatbotBody from '../../components/ChatbotBody';

export default function ChatBot() {
  return (
    <div>
      <Head>
        <title>ChatBot - HealthSync - HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ChatbotBody/>
      <Footer />
    </div>
  );
}
