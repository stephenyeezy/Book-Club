import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link'>Book Club</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/add' className='NavBar-link'>ADD BOOK</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
    </div>
    :
    <div>
      <Link to='' className='NavBar-link'>Book Club</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;