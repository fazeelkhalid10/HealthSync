import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

const specializationsList = [
  'Allergist', 'Cardiologist', 'Dermatologist', 'Endocrinologist', 'Gastroenterologist',
  'Gynecologist', 'Hepatologist', 'Internal Medicine', 'Neurologist', 'Osteopathic',
  'Otolaryngologist', 'Pediatrician', 'Phlebologist', 'Pulmonologist', 'Rheumatologist',
  'Tuberculosis'
];

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const [specialization, setSpecialization] = useState('');
  const [filteredSpecializations, setFilteredSpecializations] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1); // For keyboard navigation

  const handleSearch = (e) => {
    e.preventDefault();
    if (specialization) {
      router.push(`/search?specialization=${specialization}`);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSpecialization(input);

    // Only show suggestions if input has at least 4 characters
    if (input.length >= 4) {
      const filtered = specializationsList.filter((spec) =>
        spec.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSpecializations(filtered);
    } else {
      setFilteredSpecializations([]);
    }
    setActiveSuggestion(-1); // Reset active suggestion on input change
  };

  const handleSuggestionClick = (suggestion) => {
    setSpecialization(suggestion);
    setFilteredSpecializations([]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveSuggestion((prev) =>
        prev < filteredSpecializations.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && activeSuggestion >= 0) {
      setSpecialization(filteredSpecializations[activeSuggestion]);
      setFilteredSpecializations([]);
    }
  };

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
              <li><Link href="/HealthTip" className={router.pathname === "/HealthTip" ? "active" : ""}>
                  Health Tips
                </Link></li>
              <li><Link href="/ChatBot" className={router.pathname === "/ChatBot" ? "active" : ""}>
                  ChatBot
                </Link></li>
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

              <li className="search-section" style={{ position: 'relative' }}>
                <form onSubmit={handleSearch} className="d-flex align-items-center">
                  <input
                    type="text"
                    value={specialization}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Add keydown handler for navigation
                    placeholder="Search by Specialization"
                    className="form-control me-2"
                    style={{ width: '250px', height: '40px' }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ height: '40px' }}>
                    Search
                  </button>
                </form>

               {/* Suggestions Dropdown */}
{filteredSpecializations.length > 0 && (
  <ul className="suggestions-list" style={{
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%', // Make the suggestion list the same width as the search bar
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    zIndex: 10,
    listStyle: 'none',
    padding: '0',
    margin: '0',
    maxHeight: '200px', // Limit height and allow scrolling if needed
    overflowY: 'auto',
    display: 'block' // Ensure the suggestions container is block-level
  }}>
    {filteredSpecializations.map((spec, index) => (
      <li
        key={index}
        onClick={() => handleSuggestionClick(spec)}
        style={{
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: activeSuggestion === index ? '#e9ecef' : '#fff', // Highlight selected suggestion
          borderBottom: '1px solid #ccc',
          width: '100%', // Ensure full width for each suggestion
          boxSizing: 'border-box',
          display: 'block', // Ensure each item is block-level for vertical stacking
        }}
      >
        {spec}
      </li>
    ))}
  </ul>
)}

              </li>

              {session ? (
                <>
                  <li><Link href="#account" className="cta-btn">Account</Link></li>
                  <li>
                    <button className='btn btn-primary' onClick={() => signOut({ callbackUrl: '/login' })}>Sign Out</button>
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
