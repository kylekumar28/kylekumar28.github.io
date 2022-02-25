import React from 'react';

import HomeData from './HomeData';
import HomeImage from './HomeImage';
import HomeScroll from './HomeScroll';
import HomeSocial from './HomeSocial';

import '../styles/home.css';

function Home() {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <HomeSocial />
          <HomeImage />
          <HomeData />
        </div>
        <HomeScroll />
      </div>
    </section>
  );
}

export default Home;
