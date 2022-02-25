import React from 'react';

function ServicesModal(props) {
  const toggleModal = () => {
    props.changeModalOpen(false);
  };

  return (
    <div className={`services__modal ${props.modalOpen ? 'active-modal' : ''}`}>
      <div className='services__modal-content'>
        <h4 className='services__modal-title'>
          {props.title1} <br />
          {props.title2}
        </h4>

        <i
          className='uil uil-times services__modal-close'
          onClick={toggleModal}
        ></i>

        <ul className='services__modal-services grid'>
          <li className='services___modal-service'>
            <i className='uil uil-check-circle services__modal-icon'></i>
            <p>I develop the user interface.</p>
          </li>

          <li className='services___modal-service'>
            <i className='uil uil-check-circle services__modal-icon'></i>
            <p>Web page development.</p>
          </li>

          <li className='services___modal-service'>
            <i className='uil uil-check-circle services__modal-icon'></i>
            <p>I create UX element interactions.</p>
          </li>

          <li className='services___modal-service'>
            <i className='uil uil-check-circle services__modal-icon'></i>
            <p>I position your company brand.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesModal;
