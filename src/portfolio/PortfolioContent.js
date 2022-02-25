import React from 'react';
import { SwiperSlide } from 'swiper/react';

function PortfolioContent(props) {
  return (
    <SwiperSlide className='portfolio__content grid'>
      {/* <div className='portfolio__content grid swiper-slide'> */}
      <img src={props.img} className='portfolio__img' />

      <div className='portfolio__data'>
        <h3 className='portfolio__title'>{props.title}</h3>
        <p className='portfolio__description'>{props.description}</p>
        <a
          href='#'
          className='button button--flex button--small portfolio__button'
        >
          Demo
          <i className='uil uil-arrow-right button__icon'></i>
        </a>
      </div>
      {/* </div> */}
    </SwiperSlide>
  );
}

export default PortfolioContent;
