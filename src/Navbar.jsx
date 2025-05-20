import React from 'react';
import './App.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
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
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={e => handleClick(e, section.id)}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 