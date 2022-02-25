import React from 'react';
import AboutContainer from './AboutContainer';

import '../styles/about.css';

function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>
      <AboutContainer />
    </section>
  );
}

export default About;
