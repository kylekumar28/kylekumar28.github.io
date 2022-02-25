import React from 'react';

function QualificationTabs(props) {
  const setEducationActive = () => {
    props.setEducationActive(true);
    props.setWorkActive(false);
  };

  const setWorkActive = () => {
    props.setWorkActive(true);
    props.setEducationActive(false);
  };

  return (
    <div className='qualification__tabs'>
      <div
        className={`qualification__button button--flex ${
          props.educationActive ? 'qualification__tab-active' : ''
        } `}
        onClick={setEducationActive}
      >
        <i className='uil uil-graduation-cap qualification__icon'></i> Education
      </div>

      <div
        className={`qualification__button button--flex ${
          props.workActive ? 'qualification__tab-active' : ''
        } `}
        onClick={setWorkActive}
      >
        <i className='uil uil-briefcase-alt qualification__icon'></i> Work
      </div>
    </div>
  );
}

export default QualificationTabs;
