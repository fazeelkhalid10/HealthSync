// pages/DiseaseDetection/index.js
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DiseaseBody from '../../components/DiseaseBody';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function DiseaseDetection() {
  const {data:session,status}=useSession();
const router=useRouter();
  if(status=="loading")
    {

return(
  <>
  <p>
    Loading...
  </p>
  </>
)}
else if(status=="unauthenticated"){

router.push('/login')


}
// console.log(session.user.id);
// console.log(session.user.role);

// console.log(session.user.username);

    
  return (
    <div>
      <Head>
        <title>Disease Detection - HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {}
      <DiseaseBody />
      <Footer />
    </div>
  );
}
