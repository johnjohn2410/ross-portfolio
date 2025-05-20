import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import profilepic from './assets/profilepic.jpg';
import resume from './assets/John Ross-SWE Resume_2024.1.pdf';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section id="about" ref={sectionRef} className="about-section pt-[60px] md:pt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className="section-subtext">Introduction</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className="section-headtext">Overview.</h2>
      </motion.div>
      <div className="mt-10 flex flex-col md:flex-row md:flex-nowrap items-center md:items-start gap-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          }}
          className="w-full md:w-1/3 flex flex-col items-center justify-center"
        >
          <div
            className="avatar-glow flex items-center justify-center"
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
          <div className="mt-8 flex flex-row gap-4 justify-center">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 transition"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/johnross125307237/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-white bg-blue-600 shadow-lg hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/johnjohn2410"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-white bg-gray-700 shadow-lg hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          }}
          className="w-full md:flex-1 flex items-center md:items-start"
        >
          <ul className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none">
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
              <span>
                I&apos;m a Software Engineer and recent Computer Science graduate from UTRGV, with a passion for building impactful software and AI solutions.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">🎓</span>
              <span>
                Graduated with a B.S. in Computer Science, Minor in Applied Mathematics (GPA: 3.71). Experienced in full-stack development, cloud, and machine learning.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">🛠</span>
              <span>
                Over 4 years of freelance and professional experience delivering custom web, mobile, and cloud solutions for clients and teams.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">🔧</span>
              <span>
                I enjoy automating workflows, optimizing systems, and turning complex challenges into real results.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">💡</span>
              <span>
                Always curious and constantly learning new technologies and best practices.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 