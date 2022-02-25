import React from 'react';

import aboutMeImage from '../images/aboutme.jpg';
import AboutData from './AboutData';

function AboutContainer() {
  return (
    <div className='about__container container grid'>
      <img src={aboutMeImage} className='about__img' />
      <AboutData />
    </div>
  );
}

export default AboutContainer;
