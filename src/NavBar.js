import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './NavBar.css';

library.add(fab);

  function NavBar(props) {
    return (
      <nav className='navbar'>
        <button className='navbutton' name='linkedin' onClick={props.onClick}><FontAwesomeIcon icon={['fab', 'linkedin']} /></button>
        <button className='navbutton' name='github' onClick={props.onClick}><FontAwesomeIcon icon={['fab', 'github']} /></button>
        <button className='navbutton' name='about' onClick={props.onClick}>About</button>
        <button className='navbutton' name='blog' onClick={props.onClick}>Blog</button>
      </nav>
    );
}

export default NavBar;
