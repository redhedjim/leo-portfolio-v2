import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearActiveProject } from '../actions/projectActions';

class Project extends Component {
  render() {    
    return (
      <div>
        {this.props.project.title}
        <button onClick={this.props.clearActiveProject}><i className="fa fa-times" /></button>
      </div>
    );
  }
}

export default connect(null, { clearActiveProject })(Project);
