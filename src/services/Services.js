import React from 'react';
import ServicesContainer from './ServicesContainer';

import '../styles/services.css';

function Services() {
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <ServicesContainer />
    </section>
  );
}

export default Services;
