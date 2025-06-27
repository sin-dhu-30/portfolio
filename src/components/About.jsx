// File: components/About.jsx
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <p className="intro-text">
            Hello! I'm <strong>Sindhu J</strong>, a pre-final year Information Technology student at Madras Institute of Technology, Anna University.
          </p>
          <p>
            I'm passionate about web development, UI/UX design, and problem-solving. With a strong foundation in C++, Python, JavaScript, and DBMS, I enjoy creating clean, user-friendly interfaces backed by smart functionality.
          </p>
          <p>
            I'm also a creative mind who loves video editing, artwork, and design, and I actively contribute to college events and tech clubs.
          </p>
          <p className="quote">Always curious. Always learning. <br /> Let's build something meaningful!</p>
        </div>
        <div className="about-right">
          <div className="skill">
            <span>Fullstack Development</span>
            <div className="bar"><div className="progress" style={{ width: '95%' }}>95%</div></div>
          </div>
          <div className="skill">
            <span>UI/UX Design</span>
            <div className="bar"><div className="progress" style={{ width: '90%' }}>90%</div></div>
          </div>
          <div className="skill">
            <span>Machine Learning</span>
            <div className="bar"><div className="progress" style={{ width: '85%' }}>85%</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
