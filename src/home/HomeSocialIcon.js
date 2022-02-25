import React from 'react';

function HomeSocialIcon(props) {
  return (
    <a href='#' target='_blank' className='home__social-icon'>
      <i className={`uil ${props.unicode}`}></i>
    </a>
  );
}

export default HomeSocialIcon;
