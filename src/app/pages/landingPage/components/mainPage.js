import React from 'react';
import IntroSection from './components/introSection';
import ProjectSection from './components/projectSection';
import ResumeSection from './components/resumeSection';
import ContactSection from './components/contactSection';

const MainPage = () => {
  return (
    <div>
      <IntroSection />
      <ProjectSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;