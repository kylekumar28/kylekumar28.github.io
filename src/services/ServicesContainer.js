import React from 'react';
import ServicesContent from './ServicesContent';

function ServicesContainer() {
  return (
    <div className='services__container container grid'>
      {/* ServicesContent */}
      <ServicesContent title1='UI / UX' title2='Designer' uil='uil-web-grid' />
      {/* ServicesContent */}
      <ServicesContent title1='Frontend' title2='Developer' uil='uil-arrow' />
      {/* ServicesContent */}
      <ServicesContent title1='Branding' title2='Developer' uil='uil-pen' />
    </div>
  );
}

export default ServicesContainer;
