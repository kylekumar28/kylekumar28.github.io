import React, { useState } from 'react';
import SkillsData from './SkillsData';

function SkillContent(props) {
  const skillToggle = () => {
    if (props.skillOpen) {
      props.setSkillOpen(false);
    } else {
      props.setSkillOpen(true);
    }
  };

  return (
    <div
      className={`skills__content ${
        props.skillOpen ? 'skills__open' : 'skills__close'
      }`}
    >
      <div className='skills__header' onClick={skillToggle}>
        <i className='uil uil-brackets-curly skills__icon'></i>

        <div>
          <h1 className='skills__title'>{props.title}</h1>
          <span className='skills__subtitle'>{props.subtitle}</span>
        </div>

        <i className='uil uil-angle-down skills__arrow'></i>
      </div>

      {/* Skills grid */}
      <div className='skills__list grid'>
        {props.data.map((skill) => (
          <SkillsData name={skill.name} number={skill.number} />
        ))}
      </div>
    </div>
  );
}

export default SkillContent;
