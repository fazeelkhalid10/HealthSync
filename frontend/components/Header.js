// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">HealthSync@gmail.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>zero three three one , do aand aik lund</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
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
                <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><Link href="#">Dropdown 1</Link></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
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
              <li><a className="cta-btn d-none d-sm-block" href="#appointment">Make an Appointment</a></li>
              <li><a className="cta-btn" href="#account">Account</a></li>
            </ul>
          </nav>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </div>
      </div>
    </header>
  );
}
