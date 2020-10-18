import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <Scrollspy items={['#list', '#add']} currentClassName="is-current">
    <div>
      <div class="home">
        <Link to='' className='home'><img class="logo" src="https://i.imgur.com/H5zpFzv.png" alt="logo"></img></Link>
      </div>
      <hr></hr>
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;
      <Link to='/list' className='nav-link' style={{textDecoration: 'none'}}>Book List</Link>
      &nbsp;&nbsp;
      <Link to='/add' className='nav-link' style={{textDecoration: 'none'}}>Add Book +</Link>
      &nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='nav-link' style={{textDecoration: 'none'}}>Log Out</Link>
    </div>
  </Scrollspy>
    :
    <div>
      <div class="home">
        <Link to='' className='home'><img class="logo" src="https://i.imgur.com/H5zpFzv.png" alt="logo"></img></Link>
      </div>
      <hr></hr>
      <Link to='/login' className='nav-link' style={{textDecoration: 'none'}}>Log In</Link>
      &nbsp;&nbsp;
      <Link to='/signup' className='nav-link' style={{textDecoration: 'none'}}>Sign Up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;