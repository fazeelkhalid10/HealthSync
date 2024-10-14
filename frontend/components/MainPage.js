// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function MainPage() {
  return (
    <>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <Link href="mailto:contact@example.com">HealthSync@gmail.com</Link>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>zero three three one , do aand aik lund</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <Link href="#" className="twitter"><i className="bi bi-twitter-x"></i></Link>
              <Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
              <Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link>
              <Link href="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>

        <div className="branding">
          <div className="container d-flex justify-content-between">
            <nav id="navmenu" className="navmenu">
              <Link href="/" className="logo d-flex align-items-center">
                <h1 className="sitename">HealthSync</h1>
              </Link>
              <ul className="d-flex align-items-center justify-content: flex-end">
                <li><Link href="#hero" className="active">Home</Link></li>
                <li><Link href="/DiseaseDetection.js">Disease Detection</Link></li>
                <li><Link href="#services">Find Doctor</Link></li>
                <li><Link href="#departments">HealthTips</Link></li>
                <li><Link href="#doctors">ChatBot</Link></li>
                <li className="dropdown">
                  <Link href="#"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link href="#">Dropdown 1</Link></li>
                    <li className="dropdown">
                      <Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                      <ul>
                        <li><Link href="#">Deep Dropdown 1</Link></li>
                        <li><Link href="#">Deep Dropdown 2</Link></li>
                        <li><Link href="#">Deep Dropdown 3</Link></li>
                        <li><Link href="#">Deep Dropdown 4</Link></li>
                        <li><Link href="#">Deep Dropdown 5</Link></li>
                      </ul>
                    </li>
                    <li><Link href="#">Dropdown 2</Link></li>
                    <li><Link href="#">Dropdown 3</Link></li>
                    <li><Link href="#">Dropdown 4</Link></li>
                  </ul>
                </li>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="#appointment" className="cta-btn d-none d-sm-block">Make an Appointment</Link></li>
                <li><Link href="#account" className="cta-btn">Account</Link></li>
              </ul>
            </nav>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </div>
        </div>
      </header>
      
      
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
                <h3>Kadi vich pavayi?</h3>
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
                <h3>is it Pink?</h3>
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
                <h3>Bra kis color ka ha ?</h3>
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
                <h3>condom or no condom?</h3>
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
                <h3>Kis Company ka PAD pehnti ho?</h3>
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
                <h3>Body Count?</h3>
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



      <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">HealthSync</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="#">Web Design</Link></li>
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Product Management</Link></li>
              <li><Link href="#">Marketing</Link></li>
              <li><Link href="#">Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li><Link href="#">Molestiae accusamus iure</Link></li>
              <li><Link href="#">Excepturi dignissimos</Link></li>
              <li><Link href="#">Suscipit distinctio</Link></li>
              <li><Link href="#">Dilecta</Link></li>
              <li><Link href="#">Sit quas consectetur</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li><Link href="#">Ipsam</Link></li>
              <li><Link href="#">Laudantium dolorum</Link></li>
              <li><Link href="#">Dinera</Link></li>
              <li><Link href="#">Trodelas</Link></li>
              <li><Link href="#">Flexo</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Medilab</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
     
    </>
  );
}
