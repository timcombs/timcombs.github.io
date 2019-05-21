import React from 'react';
import './NavBar.css';

  function NavBar(props) {
    return (
      <nav className='navbar'>
        <button className='navbutton' name='linkedin' onClick={props.onClick}></button>
        <button className='navbutton' name='github' onClick={props.onClick}></button>
        <button className='navbutton' name='about' onClick={props.onClick}>About</button>
        <button className='navbutton' name='blog' onClick={props.onClick}></button>
      </nav>
    );
}

export default NavBar;
