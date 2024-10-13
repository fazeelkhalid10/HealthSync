// components/Header.js
import Link from 'next/link';

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
                <li><Link href="#about">Disease Detection</Link></li>
                <li><Link href="#services">Find Doctor</Link></li>
                <li><Link href="#departments">HealthTips</Link></li>
                <li><Link href="#doctors">ChatBot</Link></li>
                <li className="dropdown">
                  <Link href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
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
            <h2>WELCOME TO MEDILAB</h2>
            <p>We are a team of talented designers making websites with Bootstrap</p>
          </div>
          <div className="content row gy-4">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                <h3>Why Choose Medilab?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
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
                      <h4>Corporis voluptates officia eiusmod</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                      <i className="bi bi-gem"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                      <i className="bi bi-inboxes"></i>
                      <h4>Labore consequatur incidid dolore</h4>
                      <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
