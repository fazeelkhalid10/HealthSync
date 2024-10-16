// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">HealthSync</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>MughalPura Lahore</p>
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
        <p>© <span>Copyright</span> <strong className="px-1 sitename">HealthSync</strong> <span>All Rights Reserved</span></p>
        
      </div>
    </footer>
     
  );
}
