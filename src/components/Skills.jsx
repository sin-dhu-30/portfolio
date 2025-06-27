// File: components/Skills.jsx
import './Skills.css';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import bootstrapLogo from '../assets/bootstrap.png';
import cLogo from '../assets/c.png';
import cppLogo from '../assets/cpp.png';
import pythonLogo from '../assets/python.png';
import pandasLogo from '../assets/pandas.png';
import numpyLogo from '../assets/numpy.png';
import sklearnLogo from '../assets/sklearn.png';
import seabornLogo from '../assets/seaborn.png';
import mongodbLogo from '../assets/mongodb.png';
import nodeLogo from '../assets/node.png';
import figmaLogo from '../assets/figma.png';
export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-category">
        <h3 className="category-heading">Web Development</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={htmlLogo} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <img src={cssLogo} alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <img src={jsLogo} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <img src={reactLogo} alt="React" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <img src={bootstrapLogo} alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-card">
            <img src={nodeLogo} alt="NODE" />
            <p>NodeJS</p>
          </div>
          <div className="skill-card">
            <img src={mongodbLogo} alt="MONGODB" />
            <p>MONGODB</p>
          </div>
          <div className="skill-card">
            <img src={figmaLogo} alt="FIGMA" />
            <p>FIGMA</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-heading">Programming Languages</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={cLogo} alt="C" />
            <p>C</p>
          </div>
          <div className="skill-card">
            <img src={cppLogo} alt="C++" />
            <p>C++</p>
          </div>
          <div className="skill-card">
            <img src={pythonLogo} alt="Python" />
            <p>Python</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-heading">Currently Learning</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={pandasLogo} alt="Pandas" />
            <p>Pandas</p>
          </div>
          <div className="skill-card">
            <img src={numpyLogo} alt="NumPy" />
            <p>NumPy</p>
          </div>
          <div className="skill-card">
            <img src={sklearnLogo} alt="Scikit-learn" />
            <p>Scikit-learn</p>
          </div>
          <div className="skill-card">
            <img src={seabornLogo} alt="Seaborn" />
            <p>Seaborn</p>
          </div>
        </div>
      </div>
    </section>
  );
}
