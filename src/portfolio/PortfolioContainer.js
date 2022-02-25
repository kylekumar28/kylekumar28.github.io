import React from 'react';
import PortfolioContent from './PortfolioContent';

import portfolioImg1 from '../images/portfolio1.jpg';
import portfolioImg2 from '../images/portfolio2.jpg';
import portfolioImg3 from '../images/portfolio3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

function PortfolioContainer() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <Swiper
      className='portfolio__container container'
      modules={[Navigation, Pagination]}
      cssMode={true}
      loop={true}
      navigation={{
        // nextEl: navigationNextRef.current,
        nextEl: '.swiper-button-next',
        // prevEl: navigationPrevRef.current,
        prevEl: '.swiper-button-prev',
      }}
      // navigation={true}
      pagination={{ el: '.swiper-pagination', clickable: true }}
    >
      {/* // <div className='portfolio__container container swiper-container'> */}
      <div className='swiper-wrapper'>
        {/* <PortfolioContent
          img={portfolioImg1}
          title='Modern Website'
          description='Website adapatable to all devices, with UI comopnents and animated interactions'
        />
        <PortfolioContent
          img={portfolioImg2}
          title='Modern Website'
          description='Website adapatable to all devices, with UI comopnents and animated interactions'
        />
        <PortfolioContent
          img={portfolioImg3}
          title='Modern Website'
          description='Website adapatable to all devices, with UI comopnents and animated interactions'
        /> */}
        <SwiperSlide className='portfolio__content grid'>
          <img src={portfolioImg1} className='portfolio__img' />

          <div className='portfolio__data'>
            <h3 className='portfolio__title'>Modern Website</h3>
            <p className='portfolio__description'>
              Website adapatable to all devices, with UI comopnents and animated
              interactions
            </p>
            <a
              href='#'
              className='button button--flex button--small portfolio__button'
            >
              Demo
              <i className='uil uil-arrow-right button__icon'></i>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='portfolio__content grid'>
          <img src={portfolioImg2} className='portfolio__img' />

          <div className='portfolio__data'>
            <h3 className='portfolio__title'>Modern Website</h3>
            <p className='portfolio__description'>
              Website adapatable to all devices, with UI comopnents and animated
              interactions
            </p>
            <a
              href='#'
              className='button button--flex button--small portfolio__button'
            >
              Demo
              <i className='uil uil-arrow-right button__icon'></i>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='portfolio__content grid'>
          <img src={portfolioImg3} className='portfolio__img' />

          <div className='portfolio__data'>
            <h3 className='portfolio__title'>Modern Website</h3>
            <p className='portfolio__description'>
              Website adapatable to all devices, with UI comopnents and animated
              interactions
            </p>
            <a
              href='#'
              className='button button--flex button--small portfolio__button'
            >
              Demo
              <i className='uil uil-arrow-right button__icon'></i>
            </a>
          </div>
        </SwiperSlide>
      </div>

      {/* SwiperButtons */}
      {/* <PortfolioSwiperButtons /> */}
      <div className='swiper-button-next' ref={navigationNextRef}>
        <i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
      </div>
      <div className='swiper-button-prev' ref={navigationPrevRef}>
        <i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
      </div>

      {/* SwiperPagination */}
      <div className='swiper-pagination' ref={paginationRef}></div>
      {/* // </div> */}
    </Swiper>
  );
}

export default PortfolioContainer;
