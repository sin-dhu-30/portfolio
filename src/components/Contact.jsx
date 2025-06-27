// File: components/Contact.jsx
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">CONTACT</h2>
      <p className="contact-subtext">Let's get in touch!</p>

      <div className="contact-container">
        {/* LEFT: Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>sindhu30sindhu30official@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 77087-89811</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Chennai, Tamil Nadu</p>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/mwkgyvbl"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
