import React, { Component } from 'react';
import projectList from '../projectDetails';
import ProjectTile from './projectTile';

class ProjectCard extends Component {
  render() {    
    const projects = projectList.map(project => <ProjectTile key={project.id} project={project} />);
    return (
      <div className="project-card" >{projects}</div>
    );
  }
}
export default ProjectCard;
