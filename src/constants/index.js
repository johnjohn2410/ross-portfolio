import { github, react } from "../assets";

const services = [
  {
    title: "Software Developer",
    icon: react,
  },
  {
    title: "Systems Infrastructure",
    icon: react,
  },
  {
    title: "Cloud Automation",
    icon: react,
  },
  {
    title: "Workflows",
    icon: react,
  },
];


const technologies = [
  {
    name: "React",
    icon: react,
  },
  {
    name: "JavaScript",
    icon: react,
  },
  {
    name: "TypeScript",
    icon: react,
  },
  {
    name: "Node.js",
    icon: react,
  },
  {
    name: "MongoDB",
    icon: react,
  },
  {
    name: "PostgreSQL",
    icon: react,
  },
  {
    name: "AWS",
    icon: react,
  },
  {
    name: "Docker",
    icon: react,
  },
  {
    name: "Git",
    icon: github,
  },
];

const experiences = [
  {
    title: "Freelance Developer",
    company_name: "Self-Employed",
    icon: react,
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "Developed custom web and software solutions for clients in various industries.",
      "Worked with modern stacks including React, Node.js, Django, and cloud platforms.",
      "Delivered end-to-end solutions from requirements gathering to deployment.",
    ],
  },
  {
    title: "General Warehouse Associate",
    company_name: "DSV, Los Indios, TX",
    icon: react,
    iconBg: "#383E56",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Operated forklifts and pallet jacks to move inventory and maintain organized storage areas.",
      "Assisted in unloading trucks, receiving shipments, and updating inventory records.",
    ],
  },
  {
    title: "Help Desk Tech",
    company_name: "Senture, LLC, McAllen, TX",
    icon: react,
    iconBg: "#383E56",
    date: "Aug 2023 – Jan 2024",
    points: [
      "Provided technical support to clients, resolving hardware and software issues.",
      "Assisted in troubleshooting network problems and setting up new workstations.",
      "Documented support requests and resolutions to improve future service.",
    ],
  },
];

const projects = [
  {
    name: "AI-Driven Skin Lesion Segmentation",
    description:
      "Developed a deep learning-based segmentation model to accurately identify and delineate skin lesions from dermoscopic images using the ISIC Archive dataset. Implemented a U-Net architecture using MONAI and PyTorch.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "monai",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/johnjohn2410/Senior_Project_Spring_2025",
  },
  {
    name: "Expense Tracker Application",
    description:
      "A web-based expense tracker built with Django. It allows users to add, view, and categorize expenses in a user-friendly interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/johnjohn2410/Expense_Tracker_Project",
  },
  {
    name: "Analysis of Wages by Education in the U.S.A (1973-2022)",
    description:
      "A data science project analyzing wage trends based on education level in the U.S. using historical data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/johnjohn2410/Analysis-of-Wages-by-Education-in-the-U.S.A-1973-2022-",
  },
];

const education = [
  {
    title: "B.S. in Computer Science",
    company_name: "University of Texas Rio Grande Valley",
    iconBg: "#383E56",
    date: "January 2024 - May 2025",
    points: [
      "Relevant Coursework: Data Structures & Algorithms, Computer Architecture, Object-Oriented Programming in Python, Programming in Unix/Linux, Systems Programming, Intro to Data Science, Database Design",
    ],
  },
  {
    title: "Associates of Arts",
    company_name: "Lone Star College",
    iconBg: "#383E56",
    date: "August 2022 - August 2023",
    points: [
      "Relevant coursework: Programming Fundamentals, UI/UX Design, Web Development, Computer Science 1",
    ],
  },
  {
    title: "Web Development",
    company_name: "Texas Coding Bootcamp",
    iconBg: "#383E56",
    date: "January 2020 - August 2020",
    points: [
      "Completed an intensive web development bootcamp focusing on modern front-end and back-end technologies. Acquired practical skills in building responsive user interfaces and server-side applications. Collaborated on real-world projects to solidify understanding and gain experience with development workflows.",
    ],
  },
];

export { services, education, technologies, experiences, projects }; 