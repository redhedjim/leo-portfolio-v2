import React from 'react';

const IntroSection = () => {  
  return (
    <div id="intro-top" className="intro-container section">
      <div className="intro">
        <div className="intro-left">
          <div>
            <p id="intro-text-1">Hi,</p>
            <p id="intro-text-2">I'm Leo</p>
          </div>
        </div>
        <div className="intro-right intro-text-container">
          <p className="intro-header">Software developer <span>|</span> Coding mentor</p>
          <p className="intro-text">I make high traffic enterprise 
            applications with simple and easy to use UI. If you have to explain your UI to people, it 
            probably isn't good. When I'm not making applications I am likely creating and hosting 
            websites.
          </p>
          <p className="intro-text">Mentoring and coaching people on how to solve their coding problems 
            is a passion of mine.
          </p>
          <p className="intro-text">I'm from Louisiana, USA and currently live in Calgary, Canada.
            Poke around and check-out my projects as updates are always just around the corner.
            If you're curious about the code, most of it can be found on my GitHub.
          </p>
        </div>
      </div>
      <div className="intro-menu">
        <ul>
          <li id="intro-link"><a href="#intro-top">Home</a></li>
          <li id="project-link"><a href="#project-top">Projects</a></li>
          <li id="resume-link"><a href="#resume-top">Resume</a></li>
          <li id="contact-link"><a href="#contact-top">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
