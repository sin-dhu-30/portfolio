// File: components/Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY + 100;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { name: 'Portfolio', to: 'intro' },
    { name: 'About Me', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">PORTFOLIO</div>
      <div className="nav-toggle">
        <div className="hamburger" onClick={toggleMenu}>☰</div>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile-hidden' : ''}`}>
        {links.map(link => (
          <li key={link.to}>
            <Link
              activeClass="active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={activeSection === link.to ? 'active' : ''}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {menuOpen && (
        <ul className="mobile-menu">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
