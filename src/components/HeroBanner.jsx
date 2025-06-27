import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero-banner" data-aos="fade-up">
      <div className="hero-content">
        <h1>Hi, I'm Sindhu J</h1>
        <p>Pre-final year IT student | MERN Developer | UI/UX Enthusiast</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
      <img src="/profile.jpg" alt="Profile" className="hero-image" />
    </section>
  );
}