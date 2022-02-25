import React from 'react';

function AboutInfo(props) {
  return (
    <div>
      <span className='about__info-title'>{props.title}</span>
      <span className='about__info-name'>
        {props.name1} <br /> {props.name2}
      </span>
    </div>
  );
}

export default AboutInfo;
