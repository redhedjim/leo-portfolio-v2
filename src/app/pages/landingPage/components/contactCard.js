import React from 'react';
import StackoverflowLogo from '../../../images/logos/logo-stackoverflow.png';

const ContactCard = () => (
  <div className="contact-card">
    <div id="contact-body">
      <div className="social-media"><a href="http://www.github.com/redhedjim"><img role="presentation" className="img-responsive social-media-icon" src="https://image.flaticon.com/icons/png/512/25/25231.png" /></a></div>
      <div className="social-media"><a href="mailto:jamesleotucker@gmail.com"><img role="presentation" className="img-responsive social-media-icon" src="http://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png" /></a></div>
      <div className="social-media"><a href="http://www.linkedin.com/in/leo-tucker"><img role="presentation" className="img-responsive social-media-icon" src="http://findicons.com/files/icons/2779/simple_icons/512/linkedin_512_black.png" /></a></div>
      <div className="social-media"><a href="https://stackoverflow.com/story/leotucker"><img role="presentation" className="img-responsive social-media-icon" src={StackoverflowLogo} /></a></div>
    </div>
    <div className="contact-text"><p>jamesleotucker@gmail.com</p></div>
  </div>
);

export default ContactCard;
