import React, { Component } from 'react';

class ProjectTile extends Component {
  render() {
    const project = this.props.project;
    const styles = {
      tile: {
        backgroundImage: project.image,
      },
    };
    const { tile } = styles;
    return (
      <div className="project-tile">
        <img src={project.image} alt={project.title} />
        {project.title}
      </div>
    );
  }
}

export default ProjectTile;
