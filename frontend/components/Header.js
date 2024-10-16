import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <Link href="mailto:contact@example.com">HealthSync@gmail.com</Link>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+3337 897 980</span>
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
            <ul className="d-flex align-items-center justify-content-end">
              <li>
                <Link href="/MainPage" className={router.pathname === "/MainPage" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/DiseaseDetection" className={router.pathname === "/DiseaseDetection" ? "active" : ""}>
                  Disease Detection
                </Link>
              </li>
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
              <li><Link href="MakeAppointment" className="cta-btn d-none d-sm-block">Make an Appointment</Link></li>
              {session ? (
                <>
                  <li><Link href="#account" className="cta-btn">Account</Link></li>
                  <li>
                    <button className='btn btn-primary' onClick={() => signOut({ callbackUrl: '/login' })}>signOut</button>
                  </li>
                </>
              ) : (
                <li><Link href="/login" className="cta-btn">Login</Link></li>
              )}
            </ul>
          </nav>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </div>
      </div>
    </header>
  );
}
