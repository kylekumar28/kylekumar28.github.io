import React from 'react';

const NavItem = (props) => {
  const navToggle = () => {
    props.setShowMenu(false);
  };

  return (
    <li className='nav__item' onClick={navToggle}>
      <a
        href={`#${props.id}`}
        className={`nav__link ${props.active ? 'active-link' : ''}`}
      >
        <i className={`uil ${props.unicon} nav__icon`}></i> {props.name}
      </a>
    </li>
  );
};

export default NavItem;
