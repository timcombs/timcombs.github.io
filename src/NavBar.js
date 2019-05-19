import React from 'react';

  function NavBar(props) {
    return (
      <div className='navbar'>
        <button className='navbutton' name='linkedin' onClick={props.onClick}></button>
        <button className='navbutton' name='linkedin' onClick={props.onClick}></button>
        <button className='navbutton' name='linkedin' onClick={props.onClick}>About</button>
        <button className='navbutton' name='linkedin' onClick={props.onClick}></button>
      </div>
    );
}

export default NavBar;
