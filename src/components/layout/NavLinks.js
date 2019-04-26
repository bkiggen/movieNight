import React from 'react';
import { NavLink } from 'react-router-dom';
import frog from '../../assets/img/frog.png';

const NavLinks = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <NavLink to='/' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}><img src={frog} style={{width: '50px', height: '40px'}}/></NavLink>
      </div>
      <ul className="right">
        {/*<li><NavLink to="/next">Who's Next?</NavLink></li>
        <li><NavLink to="/create">Add Movie</NavLink></li>*/}
        <li><NavLink to="/archive">Archive</NavLink></li>
        <li><NavLink to="/" className="">Home</NavLink></li>
      </ul>
    </div>
  )
}

export default NavLinks;
