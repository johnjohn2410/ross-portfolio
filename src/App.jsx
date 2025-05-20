import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(savedTheme || systemTheme)
  }, [])

  useEffect(() => {
    // Update theme when it changes
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="portfolio">
      <Navbar />
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>John Ross</h1>
          <p className="subtitle">B.S. in Computer Science, Minor in Applied Mathematics</p>
          <p className="description">
            Recent graduate from UTRGV (GPA: 3.71). Freelance Developer since 2019.<br />
            Passionate about building impactful software and AI solutions.
          </p>
        </div>
      </section>

      <About />

      {/* Skills Section */}
      <motion.section className="skills" id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Java</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>MatLab</li>
              <li>Rust</li>
              <li>Haskell</li>
              <li>Ada</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Frameworks & Tools</h3>
            <ul>
              <li>Django</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Flask</li>
              <li>JUnit</li>
              <li>WordPress</li>
              <li>Material-UI</li>
              <li>FastAPI</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Machine Learning & AI</h3>
            <ul>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>OpenCV</li>
              <li>NumPy</li>
              <li>Scikit-Learn</li>
              <li>MONAI</li>
              <li>U-NET</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <h2>Experience</h2>
        <div className="timeline-3col-container">
          {/* Row 1: Card left, dot center, empty right */}
          <div className="timeline-row">
            <motion.div className="timeline-card left" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="timeline-content">
                <h3>Freelance Developer</h3>
                <span className="timeline-date">2019 - Present</span>
                <p className="timeline-company">Self-Employed</p>
                <ul>
                  <li>Developed custom web and software solutions for clients in various industries.</li>
                  <li>Worked with modern stacks including React, Node.js, Django, and cloud platforms.</li>
                  <li>Delivered end-to-end solutions from requirements gathering to deployment.</li>
                </ul>
              </div>
            </motion.div>
            <div className="timeline-center">
              <div className="timeline-dot"></div>
              <div className="timeline-line-vertical"></div>
            </div>
            <div className="timeline-card right empty"></div>
          </div>
          {/* Row 2: Empty left, dot center, card right */}
          <div className="timeline-row">
            <div className="timeline-card left empty"></div>
            <div className="timeline-center">
              <div className="timeline-dot"></div>
              <div className="timeline-line-vertical"></div>
            </div>
            <motion.div className="timeline-card right" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="timeline-content">
                <h3>DSV, Los Indios, TX</h3>
                <span className="timeline-date">Jul 2024 - Sep 2024</span>
                <p className="timeline-company">General Warehouse Associate</p>
                <ul>
                  <li>Operated forklifts and pallet jacks to move inventory and maintain organized storage areas.</li>
                  <li>Assisted in unloading trucks, receiving shipments, and updating inventory records.</li>
                </ul>
              </div>
            </motion.div>
          </div>
          {/* Row 3: Card left, dot center, empty right */}
          <div className="timeline-row">
            <motion.div className="timeline-card left" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
              <div className="timeline-content">
                <h3>Senture, LLC, McAllen, TX</h3>
                <span className="timeline-date">Aug 2023 – Jan 2024</span>
                <p className="timeline-company">Help Desk Tech</p>
                <ul>
                  <li>Provided technical support to clients, resolving hardware and software issues.</li>
                  <li>Assisted in troubleshooting network problems and setting up new workstations.</li>
                  <li>Documented support requests and resolutions to improve future service.</li>
                </ul>
              </div>
            </motion.div>
            <div className="timeline-center">
              <div className="timeline-dot"></div>
              <div className="timeline-line-vertical"></div>
            </div>
            <div className="timeline-card right empty"></div>
          </div>
        </div>
        <div className="about-content" style={{marginTop: '2rem'}}>
          <strong>Clubs & Competitions:</strong>
          <ul>
            <li>IEEE (Institute of Electrical and Electronics Engineers)</li>
            <li>IEEE Xtreme 18.0 Global Programming Competition, Ranked 12th in the United States</li>
            <li>"The Bits" team: 24-hour global hackathon, solving complex programming challenges</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section className="projects" id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>AI-Driven Skin Lesion Segmentation</h3>
            <p>Developed an AI-powered deep learning model for medical image segmentation, identifying and delineating skin lesions from the ISIC Archive dataset. Implemented a U-Net architecture using MONAI and PyTorch, achieving 95%+ Dice Score.</p>
            <div className="project-links">
              <span>Python, PyTorch, MONAI, OpenCV, NumPy</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Stock Trading Application (Robinhood Clone)</h3>
            <p>Integrated Alpaca API for real-time stock price updates, historical analysis, and trading functionalities. Built core trading logic in C++ and a full-stack web app for portfolio management and transaction history.</p>
            <div className="project-links">
              <span>C++, React, Node.js, Express, MongoDB</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Expense Tracker Application</h3>
            <p>Personal finance web app for tracking income, expenses, and monthly budgets. Implemented secure user authentication with email verification and enhanced security using environment variables.</p>
            <div className="project-links">
              <span>Django, Python, SQLite, JavaScript, HTML/CSS</span>
              <a href="https://github.com/johnjohn2410/Expense_Tracker_Project" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
