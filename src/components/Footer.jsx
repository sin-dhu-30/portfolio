// File: components/Footer.jsx
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="mailto:sindhu30sindhu30official@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/sindhu30" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/sindhu30" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <p className="footer-copy">© 2025 Sindhu. All rights reserved.</p>
      </div>
    </footer>
  );
}
