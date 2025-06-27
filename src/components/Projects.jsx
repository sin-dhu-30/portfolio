// File: components/Projects.jsx
import './Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">PROJECTS</h2>

      <div className="projects-grid">
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <h3>Dental Appointment</h3>
          <p>React-based booking system with smooth UX, form validation, and Firebase auth.</p>
        </div>

        <div className="project-card">
          <img src={project2} alt="Project 2" />
          <h3>ReviewWise</h3>
          <p>MERN-stack AI system to detect fake reviews using ML models and admin dashboard.</p>
        </div>

        <div className="project-card">
          <img src={project3} alt="Project 3" />
          <h3>City Traffic Analysis</h3>
          <p>Graph theory + data viz project to model real-time congestion and route mapping.</p>
        </div>

        {/* Add more cards as needed */}
      </div>
    </section>
  );
}
