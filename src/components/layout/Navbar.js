import React from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLinks />
      </div>
    </nav>
  )
}

export default Navbar;
