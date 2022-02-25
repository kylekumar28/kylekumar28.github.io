import React from 'react';

function QualificationDataRight(props) {
  return (
    <div className='qualification__data'>
      <div></div>

      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>

      <div>
        <h2 className='qualification__title'>{props.title}</h2>
        <span className='qualification__subtitle'>{props.subtitle}</span>
        <div className='qualification__calendar'>
          <i className='uil uil-calendar-alt'></i>
          {props.date}
        </div>
      </div>
    </div>
  );
}

export default QualificationDataRight;
