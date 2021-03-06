import React from 'react';

const IntroSection = () => (
  <div id="intro-top" className="intro-container">
    <div className="intro">
      <div className="intro-left">
        <div>
          <p id="intro-text-1" className="title">Hi,</p>
          <p id="intro-text-2" className="title"> I'm Leo</p>
        </div>
      </div>
      <div className="intro-right intro-text-container">
        <p className="intro-header title">Software developer<span />Coding mentor</p>
        <p className="intro-text">I make high traffic enterprise 
            applications built with user experience in mind. When I'm not making applications I am likely creating and hosting 
            websites.
        </p>
        <p className="intro-text">Mentoring and coaching people on how to solve their coding problems 
            is a passion of mine. I love sharing my passion for learning with others.
        </p>
        <p className="intro-text">I'm from Louisiana, USA and currently live in Calgary, Canada.
            Poke around and check-out my projects as updates are always just around the corner.
            If you're curious about the code, most of it can be found on my GitHub.
        </p>
      </div>
    </div>
    <div className="intro-menu">
      <ul>
        <li id="intro-link"><a href="#intro-top" className="title">Home</a></li>
        <li id="project-link"><a href="#project-top" className="title">Projects</a></li>
        <li id="contact-link"><a href="#contact-top" className="title">Contact</a></li>
      </ul>
    </div>
  </div>
);

export default IntroSection;
