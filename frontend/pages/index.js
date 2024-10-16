import Head from 'next/head';

import MainPage from './MainPage';
import DiseaseDetection from './DiseaseDetection';
import MakeAppointment from './MakeAppointment';


export default function HomePage() {
  return <MainPage/>;
}

// export default function HomePage() {
 
//   return (
//     <div>
//       <Head>
//         <title>HealthSync</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <MainPage />
//       {/* <DiseaseDetection/> */}
      
//      {/* idher sirf pages likh ker test karli routing baad me karlenge */}
     
//     </div>
//   );
// }
