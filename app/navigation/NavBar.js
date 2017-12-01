import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../flashMessages/actions/flashMessagesActions';

class NavBar extends Component {
  componentWillMount() {
    // this.props.addMessage();
  }
  render() { 
    return null;
  }
}
  
export default connect(null, { addMessage })(NavBar);
