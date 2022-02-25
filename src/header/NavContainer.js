import React, { useState } from 'react';

import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavThemeButton from './NavThemeButton';
import NavToggleButton from './NavToggleButton';

function NavContainer() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='nav container'>
      <NavLogo />
      <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className='nav__btns'>
        <NavThemeButton />
      </div>
      <NavToggleButton setShowMenu={setShowMenu} />
    </nav>
  );
}

export default NavContainer;
