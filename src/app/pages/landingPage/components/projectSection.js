import React, { Component} from 'react';
import ProjectCard from './projectCard';
import projectData from './common/projectData';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
}
class ProjectSection extends Component { 
  constructor(props){
    super(props);
    this.state = {
      projectId: 1,
      currentProject: projectData[0]
    };
    
  } 

  selectTab = (value) => {
    const project = projectData.filter(proj => { return proj.id === value })[0];    
    this.setState({
      projectId: value,
      currentProject: project
    });
  };

  render() {    
    const projectTabs = projectData.map((project) => {
      return <Tab key={project.id}label={project.title} value={project.id} style={styles}></Tab>
    })
    return (
      <div id="project-top">
        <div className="header project-header"><h2>Projects</h2></div>
        <div className="project-selector">
          <Tabs
            value={this.state.projectId}
            onChange={this.selectTab}           
          >
           {projectTabs}
          </Tabs>
        </div>
        {this.state.currentProject ? <ProjectCard project={this.state.currentProject}/> : ''}
      </div>
    );
  }
};

export default ProjectSection;