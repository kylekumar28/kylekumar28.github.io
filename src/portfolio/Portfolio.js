import React from 'react';
import PortfolioContainer from './PortfolioContainer';

import '../styles/portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Most recent work</span>

      <PortfolioContainer />
    </section>
  );
}

export default Portfolio;
