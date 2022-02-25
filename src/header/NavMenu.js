import React from 'react';

import NavItem from './NavItem';
import NavCloseButton from './NavCloseButton';

function NavMenu(props) {
  return (
    <div
      className={`nav__menu ${props.showMenu ? 'show-menu' : ''}`}
      id='nav-menu'
    >
      <ul className='nav__list grid'>
        <NavItem
          id='home'
          name='Home'
          unicon='uil-home'
          active={true}
          setShowMenu={props.setShowMenu}
        />
        <NavItem
          id='about'
          name='About'
          unicon='uil-user'
          setShowMenu={props.setShowMenu}
        />
        <NavItem
          id='skills'
          name='Skills'
          unicon='uil-file-alt'
          setShowMenu={props.setShowMenu}
        />
        <NavItem
          id='services'
          name='Services'
          unicon='uil-briefcase-alt'
          setShowMenu={props.setShowMenu}
        />
        <NavItem
          id='portfolio'
          name='Portfolio'
          unicon='uil-scenery'
          setShowMenu={props.setShowMenu}
        />
        <NavItem
          id='contact'
          name='Contact Me'
          unicon='uil-message'
          setShowMenu={props.setShowMenu}
        />
      </ul>
      <NavCloseButton setShowMenu={props.setShowMenu} />
    </div>
  );
}

export default NavMenu;
