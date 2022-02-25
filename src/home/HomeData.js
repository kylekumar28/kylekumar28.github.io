import React from 'react';

function HomeData() {
  return (
    <div className='home__data'>
      <h1 className='home__title'>HI, I'm Kyle</h1>
      <h3 className='home__subtitle'>Frontend developer</h3>
      <p className='home__description'>
        Computer science student, web developer and web designer.
      </p>
      <a href='#contact' className='button button--flex'>
        Contact Me <i className='uil uil-message button__icon'></i>
      </a>
    </div>
  );
}

export default HomeData;
