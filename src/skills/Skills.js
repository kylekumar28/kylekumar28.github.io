import React from 'react';

import '../styles/skills.css';

import SkillsContainer from './SkillsContainer';

function Skills() {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <SkillsContainer />
    </section>
  );
}

export default Skills;
