import React from 'react';

function SkillsData(props) {
  const skillWidth = `${props.number}%`;

  const skillStyle = {
    width: skillWidth,
  };

  return (
    <div className='skills__data'>
      <div className='skills__titles'>
        <h3 className='skills__name'>{props.name}</h3>
        <span className='skills__number'>{`${props.number}%`}</span>
      </div>
      <div className='skills__bar'>
        <span className='skills__percentage' style={skillStyle}></span>
      </div>
    </div>
  );
}

export default SkillsData;
