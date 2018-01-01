import React from 'react';
import stackoverflowLogo from '../../../images/logos/logo-stackoverflow.png';
import linkedinLogo from '../../../images/logos/logo-linkedin.png';
import emailLogo from '../../../images/logos/logo-email.png';
import githubLogo from '../../../images/logos/logo-github.png';
import rookieUpLogo from '../../../images/logos/logo-rookieupBlack.jpg';

const ContactCard = () => (
  <div className="contact-card">
    <div id="contact-body">
      <div className="social-media"><a href="http://www.github.com/redhedjim"><img role="presentation" className="img-responsive social-media-icon" src={githubLogo} /></a></div>
      <div className="social-media"><a href="mailto:jamesleotucker@gmail.com"><img role="presentation" className="img-responsive social-media-icon" src={emailLogo} /></a></div>
      <div className="social-media"><a href="http://www.linkedin.com/in/leo-tucker"><img role="presentation" className="img-responsive social-media-icon" src={linkedinLogo} /></a></div>
      <div className="social-media"><a href="https://stackoverflow.com/story/leotucker"><img role="presentation" className="img-responsive social-media-icon" src={stackoverflowLogo} /></a></div>
      <div className="social-media"><a href="https://www.rookieup.com/leotucker/"><img role="presentation" className="img-responsive social-media-icon" src={rookieUpLogo} /></a></div>
    </div>
    <div className="contact-text"><p>jamesleotucker@gmail.com</p></div>
  </div>
);

export default ContactCard;
