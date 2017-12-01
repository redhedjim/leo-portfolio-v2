import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearActiveProject } from '../actions/projectActions';
import LightboxViewer from './lightboxViewer';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
    this.closeProjectDetails = this.closeProjectDetails.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.closeProjectDetails, false);
  }
  closeProjectDetails(e) {
    if (e.keyCode === 27) {
      this.props.clearActiveProject();
    }
  }
  
  render() { 
    let images = [];  
    let techUsed = [];  
    let projectLink = '';
    const { project, project: { title, details, techStack } } = this.props;
    
    if (techStack) {
      techUsed = techStack.map((tech, i) => <li key={i} className="tech">{tech}</li>);
    }
    if (project.screenshots) {
      images = project.screenshots.map((img, i) => <img key={i} src={img} className="screenshot" />);
    }
    if (project.projectLink) {
      projectLink = <a href={project.projectLink}>Visit project</a>;
    }
    const logos = project.logos.map((logo, i) => <img key={i} className="logo" src={logo} />);    
    
    return (
      <div className="project-details">
        <div className="project-background-container">
          <div className="project-details-header">
            <i className="fa fa-times fa-4x" onClick={this.props.clearActiveProject} />
          </div>
          <div className="screenshot-container">
            <LightboxViewer images={project.screenshots} />
          </div>
          <div className="project-details-left">
            <p className="project-link">{projectLink}</p>
            <p className="project-title">{title}</p>
            <div className="project-details-logos">{logos}</div>
          </div>
          <div className="project-details-right">
            <p className="project-description">{details}</p>
            <p className="tech-used-header">Tech used</p>
            <hr />
            <ul className="tech-used">{techUsed}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { clearActiveProject })(ProjectDetails);
