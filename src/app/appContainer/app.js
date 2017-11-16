import React, { Component } from 'react';
import Navbar from '../navigation/NavBar';
import FlashMessages from '../flashMessages/components/FlashMessages';
import IntroSection from '../pages/landingPage/components/introSection';
import ProjectSection from '../pages/landingPage/components/projectSection';
import ResumeSection from '../pages/landingPage/components/resumeSection';
import ContactSection from '../pages/landingPage/components/contactSection';

class App extends Component {
  render() { 
    return (
      <div>      
        <Navbar />
        <FlashMessages />
        {this.props.children}
        <IntroSection />
        <ProjectSection />
        <ResumeSection />
        <ContactSection />
      </div>
    );
  }
}

export default App;
