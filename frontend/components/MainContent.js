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
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                      <i className="bi bi-gem"></i>
                      <h4>Our Achievements</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                      <i className="bi bi-inboxes"></i>
                      <h4>Find More</h4>
                      <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
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
              <Link href="https://youtu.be/SjADMZPAPoc?feature=shared" className="glightbox pulsating-play-btn">
                {/* You can also add an icon or text for the link if needed */}
              </Link>
            </div>
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <h3>About Us</h3>
              <p>
                Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-vial-circle-check"></i>
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-pump-medical"></i>
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-heart-circle-xmark"></i>
                  <div>
                    <h5>Voluptatem et qui exercitationem</h5>
                    <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
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
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>Why HealthSync?</h3>
                <div className="faq-content">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.
                    Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item">
                <h3>Any Hidden Charges?</h3>
                <div className="faq-content">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                    donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                    ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item">
                <h3> How think works ?</h3>
                <div className="faq-content">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum
                    integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
                    Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi
                    quis
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item">
                <h3> Are Doctor Trusted?</h3>
                <div className="faq-content">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                    donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                    ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item">
                <h3>Affilated Hospitals?</h3>
                <div className="faq-content">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel
                    risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida
                    quis blandit turpis cursus in
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item">
                <h3>Number of Users?</h3>
                <div className="faq-content">
                  <p>
                    Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi.
                    Distinctio ipsam dolore et.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}
            </div>
          </div>
          {/* End Faq Column */}
        </div>
      </div>
    </section>



    </>
  );
}}
