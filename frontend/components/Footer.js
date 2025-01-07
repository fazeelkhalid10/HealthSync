// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">HealthSync</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>123 HealthSync Street</p>
              <p>Downtown, Lahore 54000</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+92 300 1234567</span>
              </p>
              <p>
                <strong>Email:</strong> <span>support@healthsync.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="/telemedicine">Telemedicine</Link></li>
              <li><Link href="/health-checkups">Health Checkups</Link></li>
              <li><Link href="/consultations">Consultations</Link></li>
              <li><Link href="/emergency-care">Emergency Care</Link></li>
              <li><Link href="/pharmacy">Online Pharmacy</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/blog">Health Blog</Link></li>
              <li><Link href="/symptom-checker">Symptom Checker</Link></li>
              <li><Link href="/diet-plans">Diet Plans</Link></li>
              <li><Link href="/fitness-guides">Fitness Guides</Link></li>
              <li><Link href="/research">Medical Research</Link></li>
            </ul>
          </div>

          {/* Patient Support */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Patient Support</h4>
            <ul>
              <li><Link href="/appointments">Book an Appointment</Link></li>
              <li><Link href="/help-center">Help Center</Link></li>
              <li><Link href="/insurance">Insurance Information</Link></li>
              <li><Link href="/testimonials">Patient Testimonials</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">HealthSync</strong> <span>All Rights Reserved</span>
        </p>
        <p className="mt-2">
          Your trusted partner in health and wellness.
        </p>
      </div>
    </footer>
  );
}
