import React from 'react';
const ProjectCard = (props) => {
    const project = props.project;
    const sections = props.project.sections;

    const projectSummary = 
        <div className="project-overview">
            <h2 className="project-title text-center">{project.title}</h2>
            <p className="project-summary text-center">{project.details}</p>
            <div className="project-image">
                <img role="presentation" className="img-responsive" src={project.image}/>
            </div>
        </div>;

    const Section = ({ title, details = '', sections = [] }) => {
        return (
            <div className="project-item">
                <h3 className="text-center">{title}</h3>
                {details && <p className="item-details">{details}</p>}
                {sections.length > 0 && sections.map((item) => <div key={item.title}><p className="item-title">{item.title}</p><p className="item-details">{item.details}</p></div>)}
            </div>
        );
    }
  
  return (
    <div className="project-card">
        {projectSummary}      
        <div className="project-details">{sections.map((section, i) => <Section key={i} {...section} />)}</div>  
    </div>
  )
}

export default ProjectCard;