import React from 'react';

  function NavBar(props) {
    return (
      <nav className='navbar'>
        <button className='navbutton' name='linkedin' onClick={props.onClick}></button>
        <button className='navbutton' name='linkedin' onClick={props.onClick}></button>
        <button className='navbutton' name='linkedin' onClick={props.onClick}>About</button>
        <button className='navbutton' name='linkedin' onClick={props.onClick}></button>
      </nav>
    );
}

export default NavBar;
