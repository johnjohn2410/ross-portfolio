import React from 'react';
import './App.css';

const navLinks = [
  {
    id: "about",
    title: "Introduction",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "certifications",
  //   title: "Certifications",
  // },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo gradient-text">John Ross</span>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id || link.title}>
              <a href={`#${link.id}`} onClick={e => handleClick(e, link.id)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 