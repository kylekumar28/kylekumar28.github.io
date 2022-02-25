import React from 'react';

function QualificationDataLeft(props) {
  return (
    <div className='qualification__data'>
      <div>
        <h2 className='qualification__title'>{props.title}</h2>
        <span className='qualification__subtitle'>{props.subtitle}</span>
        <div className='qualification__calendar'>
          <i className='uil uil-calendar-alt'></i>
          {props.date}
        </div>
      </div>

      <div>
        <span className='qualification__rounder'></span>
        {props.end ? '' : <span className='qualification__line'></span>}
        {/* <span className='qualification__line'></span> */}
      </div>
    </div>
  );
}

export default QualificationDataLeft;
