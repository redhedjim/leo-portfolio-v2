import React from 'react';
import ResumeCard from './resumeCard.js';

const ResumeSection = () => {
  return (
     <div id="resume-top">
       <div className="header resume-header"><h2>Resume</h2></div>
        <ResumeCard />
    </div>
  );
};

export default ResumeSection;