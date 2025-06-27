// File: components/IntroBanner.jsx
import './IntroBanner.css';
import profileImg from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function IntroBanner() {
  return (
    <section className="intro-wrapper" id="intro">
      <div className="intro-left">
        <p className="greeting">Hi, I am</p>
        <h1 className="name">SINDHU</h1>
        <p className="role">Fullstack Developer / UI Designer / ML Engineer</p>

        <div className="social-icons">
          <a href="mailto:sindhu30sindhu30official@gmail.com" className="icon"><FaEnvelope /></a>
          <a href="https://github.com/sin-dhu-30" className="icon" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="www.linkedin.com/in/sindhu-j-404b982aa" className="icon" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>

        <div className="btn-group">
          <a href="/Sindhu_Resume.pdf" download className="resume-btn">Resume ⬇</a>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="work-btn"
          >
            View My Work →
          </Link>
        </div>
      </div>

      <div className="intro-right">
        <img src={profileImg} alt="Sindhu" className="profile-img" />
      </div>
    </section>
  );
}
