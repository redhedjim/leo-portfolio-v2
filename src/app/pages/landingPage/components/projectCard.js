import React, { Component } from 'react';
import { connect } from 'react-redux';
import projectList from '../projectDetails';
import ProjectTile from './projectTile';
import Project from './project';
import { setActiveProject } from '../actions/projectActions';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(id) {
    this.props.setActiveProject(id);
  }
  render() {  
    const { activeProject } = this.props;  
    console.log('Active project: ', activeProject);
    
    const projects = projectList.map(project => (
      <ProjectTile 
        key={project.id}
        project={project} 
        onClick={this.onClick}
      />
    ));
    return (
      <div className="project-card">
        {Object.keys(activeProject).length !== 0 ? <Project project={this.props.activeProject} /> : projects}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeProject: state.activeProject,
});

export default connect(mapStateToProps, { setActiveProject })(ProjectCard);
