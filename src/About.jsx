import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
      </motion.div>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className="section-headtext">About Me</h2>
      </motion.div>
      <div className="mt-10 flex flex-col md:flex-row md:flex-nowrap items-center md:items-start gap-10 max-w-4xl mx-auto w-full">
        
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
                I'm a Software Engineer with a Bachelor of Science in Computer Science from UTRGV. I'm passionate about building meaningful software solutions, with a particular interest in artificial intelligence and machine learning.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">🛠</span>
              <span>
                I enjoy solving complex problems, automating workflows, and optimizing systems to deliver scalable, efficient applications.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">🚀</span>
              <span>
                With over 4 years of freelance and experience, I've delivered full-stack, mobile, and cloud-based projects across diverse domains.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl flex-shrink-0">💡</span>
              <span>
                I'm constantly exploring new technologies, refining my engineering skills, and working to become a better and more impactful developer every day.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 