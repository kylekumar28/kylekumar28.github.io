import React, { useState } from 'react';
// import { useState } from 'react/cjs/react.development';
import ServicesModal from './ServicesModal';

function ServicesContent(props) {
  const [modalOpen, changeModalOpen] = useState(false);

  const toggleModal = () => {
    changeModalOpen(true);
  };

  return (
    <div className='services__content'>
      <i className={`uil ${props.uil} services__icon`}></i>
      <h3 className='services__title'>
        {props.title1} <br />
        {props.title2}
      </h3>

      <span
        className='button button--flex button--link services__button'
        onClick={toggleModal}
      >
        View more <i className='uil uil-arrow-right button__icon'></i>
      </span>

      <ServicesModal
        title1={props.title1}
        title2={props.title2}
        modalOpen={modalOpen}
        changeModalOpen={changeModalOpen}
      />
    </div>
  );
}

export default ServicesContent;
