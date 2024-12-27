// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useSession,signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function MainPage() {
  const { data: session, status } = useSession();
const [name,setName]=useState(null)
const router = useRouter();
const [activeIndex, setActiveIndex] = useState(0);

const faqData = [
  {
    question: "Why HealthSync?",
    answer: "HealthSync offers a comprehensive healthcare management platform that seamlessly connects patients with healthcare providers. Our platform reduces wait times by 40%, enables secure access to medical records, and coordinates care across providers."
  },
  {
    question: "Any Hidden Charges?",
    answer: "We maintain complete transparency in our pricing. The basic plan includes appointment scheduling, medical record access, and prescription management at no additional cost. Premium features are clearly listed with their respective charges."
  },
  {
    question: "How think works?",
    answer: "HealthSync uses advanced AI technology to match patients with suitable healthcare providers based on their needs, location, and insurance coverage. Schedule appointments, receive reminders, and communicate with healthcare providers through our secure platform."
  },
  {
    question: "Are Doctor Trusted?",
    answer: "Every healthcare provider on HealthSync undergoes rigorous verification. We validate medical licenses, credentials, and practice history. Our providers maintain an average rating of 4.8/5 from verified patient reviews."
  },
  {
    question: "Affilated Hospitals?",
    answer: "HealthSync partners with over 500 leading hospitals nationwide, including major healthcare networks and specialized treatment centers. Our network includes renowned institutions ensuring access to quality healthcare wherever you are."
  },
  {
    question: "Number of Users?",
    answer: "HealthSync serves over 2 million active users and facilitates more than 100,000 appointments monthly. Our platform has a 96% user satisfaction rate and processes over 50,000 secure medical record transfers daily."
  }];
// useEffect(() => {
//   if (session && session.user) {
//     setName(session.user.username); // Set name when session exists
//   } else {
//     setName(null); // Reset name if session doesn't exist
//   }
// }, [session]); // Depend on session
// useEffect(() => {
//   if (!session) {
//     router.push('/login'); // Redirect to login if not authenticated
//   }
// }, [session, router]);
// Display loading message while checking session
if (status === "loading") {
  return <p>Loading...</p>;
}
if(true){
  return (
    <>
      
      
      <section id="hero" className="hero section light-background">
        <div style={{ width: '100%', height: '100%', backgroundImage: 'url("/hero-bg.jpg")', position: 'absolute', inset: 0, zIndex: 1 }} />
        <div className="container position-relative">
          <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
            <h2>WELCOME TO HealthSync</h2>
            <p>Your Gateway to Accurate Disease Detection And Tailored health Guidance</p>
          </div>
          <div className="content row gy-4">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                <h3>Why Choose HealthSync?</h3>
                <p>
                Choose HealthSync for its innovative approach to healthcare management, utilizing Al-driven technology to provide personalized disease detection, real-time health guidance, and seamless communication with healthcare providers, ensuring you receive the best possible support on your health journey.
                </p>
                <div className="text-center">
                  <Link href="#about" className="more-btn">
                    <span>Learn More</span> <i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="d-flex flex-column justify-content-center">
                <div className="row gy-4">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                      <i className="bi bi-clipboard-data"></i>
                      <h4>Our Reviews!</h4>
                      <p>User-friendly interface and quick access to top-notch healthcare services. Five stars!</p>
                      <p>Amazing platform! Booking an appointment was never this easy. Highly recommend it to everyone.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                      <i className="bi bi-gem"></i>
                      <h4>Our Achievements</h4>
                      <p>Recognized as a leading platform in healthcare innovation, empowering thousands to access quality medical services seamlessly.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                      <i className="bi bi-inboxes"></i>
                      <h4>Find More</h4>
                      <p>    Discover a wealth of healthcare resources, expert advice, and tailored solutions for your well-being.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}

      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4 gx-5">
            <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="200">
              {/* Correctly using the Image component */}
              <Image 
  src="/about.jpg" // Path to your image
  className="img-fluid" 
  alt="About Us" 
  width={500} // Specify the width
  height={300} // Specify the height
  priority // Optional: to load the image early if it's important for the page
/>
              <Link href="https://drive.google.com/file/d/1TK88QikqPaPzhGkIt_FUtkRoKO0sQiLq/view?usp=sharing" className="glightbox pulsating-play-btn">
                {/* You can also add an icon or text for the link if needed */}
              </Link>
            </div>
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
  <h3 className="text-3xl md:text-4xl font-bold mb-4">About Us</h3>
  <p className="text-lg text-gray-700 mb-6">
    We are dedicated to delivering outstanding healthcare services with a focus on innovation, compassion, and reliability. Our team of skilled professionals ensures your well-being with personalized care tailored to your individual needs.
  </p>
  <ul className="space-y-6">
    <li className="flex items-start">
      <i className="fa-solid fa-vial-circle-check text-blue-600 text-2xl mr-4"></i>
      <div>
        <h5 className="font-semibold text-xl text-gray-800">Quality Healthcare Solutions</h5>
        <p className="text-gray-600">We provide solutions designed to enhance your health and well-being through cutting-edge technology and compassionate care.</p>
      </div>
    </li>
    <li className="flex items-start">
      <i className="fa-solid fa-pump-medical text-blue-600 text-2xl mr-4"></i>
      <div>
        <h5 className="font-semibold text-xl text-gray-800">Innovative Healthcare Delivery</h5>
        <p className="text-gray-600">We leverage the latest innovations to ensure that our healthcare services are accessible, efficient, and of the highest quality.</p>
      </div>
    </li>
    <li className="flex items-start">
      <i className="fa-solid fa-heart-circle-xmark text-blue-600 text-2xl mr-4"></i>
      <div>
        <h5 className="font-semibold text-xl text-gray-800">Personalized Patient Care</h5>
        <p className="text-gray-600">Our approach focuses on understanding each patient's unique needs and delivering customized care that best suits their health goals.</p>
      </div>
    </li>
  </ul>
</div>

          </div>
        </div>
      </section>

      


      <section id="faq" className="faq section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Our solutions are designed to address your needs in unique and effective ways, ensuring that every requirement is met with precision and care.</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              >
                <h3>{faq.question}</h3>
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
        </div>
      ))}
    </div>
          </div>
          {/* End Faq Column */}
        </div>
      </div>
    </section>



   
    </>
  );
}}
