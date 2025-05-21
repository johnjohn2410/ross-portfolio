import React from 'react';
import { projects } from './constants';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className={`tag ${tag.color}`}>
            {tag.name}
          </span>
        ))}
      </div>
      {project.source_code_link && (
        <div className="project-links">
          <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      )}
    </div>
  );
};

const Works = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Works; 