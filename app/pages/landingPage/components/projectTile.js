import React, { Component } from 'react';

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    const project = this.props.project;
    const { background } = project.colors;
    const logos = project.logos.map(logo => <img key={logo} className="logo" src={logo} />);
    return (
      <div
        style={{ backgroundColor: background }}
        className="project-tile"
        onClick={() => this.props.onClick(project.id)}
      >
        {project.title}
        <div className="logo-container">{logos}</div>
      </div>
    );
  }
}

export default ProjectTile;
