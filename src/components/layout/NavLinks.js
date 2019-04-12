import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="right">
    <li><NavLink to="/next">Who's Next?</NavLink></li>
      <li><NavLink to="/create">Add Movie</NavLink></li>
      <li><NavLink to="/" className="">Home</NavLink></li>
    </ul>
  )
}

export default NavLinks;