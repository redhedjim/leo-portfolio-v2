import React, { Component } from 'react';
import ProjectCard from './projectCard';

class ProjectSection extends Component { 
  render() {    
    return (
      <div id="project-top">
        <div className="project-header"><h2>Projects</h2></div>
        <ProjectCard />
      </div>
    );
  }
}

export default ProjectSection;
