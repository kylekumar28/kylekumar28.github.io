import React from 'react';

function NavCloseButton(props) {
  const navToggle = () => {
    props.setShowMenu(false);
  };

  return (
    <>
      <i
        className='uil uil-times nav__close'
        id='nav-close'
        onClick={navToggle}
      ></i>
    </>
  );
}

export default NavCloseButton;
