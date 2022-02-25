import React from 'react';

function NavToggleButton(props) {
  const navToggle = () => {
    props.setShowMenu(true);
  };

  return (
    <div className='nav__toggle' id='nav-toggle' onClick={navToggle}>
      <i className='uil uil-apps'></i>
    </div>
  );
}

export default NavToggleButton;
