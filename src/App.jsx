import About from './About'
import Contact from './Contact'
import Education from './Education'
import Works from './Works'
import './App.css'
import { motion } from 'framer-motion'
import React from 'react'
import profilepic from './assets/profilepic.jpg';
import Navbar from './Navbar'
import Experience from './Experience';

function App() {
  // Set theme to dark mode permanently
  document.documentElement.setAttribute('data-theme', 'dark')

  return (
    <div className="portfolio">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content flex items-center justify-center">
          {/* Avatar Image */}
          <div
            className="avatar-glow mr-4"
            style={{
              width: '128px',
              height: '128px',
              maxWidth: '100vw',
              maxHeight: '100vw',
            }}
          >
            <img
              src={profilepic}
              alt="John Ross"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%',
                borderRadius: '50%',
                display: 'block',
              }}
            />
          </div>
          <h1>
            <TypingEffect text="Hello, my name is John Ross, I'm a software engineer with 2 years experience" speed={50} />
          </h1>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <About />
      </motion.div>

      {/* Skills Section */}
      <motion.section 
        className="skills" 
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Rust</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Frameworks & Tools</h3>
            <ul>
              <li>Django</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Machine Learning & AI</h3>
            <ul>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>U-NET</li>
              <li>MONAI</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Education />
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="experience" 
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Experience</h2>
        <Experience />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Works />
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Contact</h2>
        <Contact />
      </motion.section>
    </div>
  );
}

function TypingEffect({ text, speed }) {
  const [displayText, setDisplayText] = React.useState('');
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    if (i < text.length) {
      const timerId = setTimeout(() => {
        setDisplayText(text.substring(0, i + 1));
        setI(i + 1);
      }, speed);
      return () => clearTimeout(timerId);
    }
  }, [i, text, speed]);

  // Effect to loop the typing animation after a delay
  React.useEffect(() => {
    if (i === text.length) {
      const loopTimer = setTimeout(() => {
        setDisplayText('');
        setI(0);
      }, 10000); // 10 seconds delay
      return () => clearTimeout(loopTimer);
    }
  }, [i, text]); // Depend on i and text

  return <span>{displayText}</span>;
}

export default App;
