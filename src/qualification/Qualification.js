import React from 'react';

import '../styles/qualification.css';

import QualificationContainer from './QualificationContainer';

function Qualification() {
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <QualificationContainer />
    </section>
  );
}

export default Qualification;
