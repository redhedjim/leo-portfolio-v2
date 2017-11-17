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
    const styles = {
      tile: {
        backgroundImage: `url(${project.image})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      hover: {
        color: 'black',      
      },
      textBox: {
        
      },
    };
    const { tile, hover, textBox, textBoxHover } = styles;
    const logos = project.logos.map(logo => <img key={logo} className="logo" src={logo} />);
    return (
      <div
        className="project-tile"
        style={this.state.hover ? hover : tile} 
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover} 
        onClick={() => this.props.onClick(project.id)} 
      >
        <div className="text-box">
          <p className="tile-title">{project.title}</p>
          <div className="tile-text-details">
            {logos}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTile;
