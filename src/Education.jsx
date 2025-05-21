import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import reactIcon from "./assets/react.svg";
import { education } from "./constants";

// import { styles } from "../styles";
// import { education } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={<></>}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.company_name} - {education.title}</h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points && education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education; 