import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './NavBar.css';

library.add(fab);

  function NavBar(props) {
    return (
      <nav className='navbar'>
        <a className='navbutton' name='linkedin' href='https://www.linkedin.com/in/timothycombs/' onClick={props.onClick}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a className='navbutton' name='github' href='https://github.com/timcombs' onClick={props.onClick}><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a className='navbutton' name='about' href='' onClick={props.onClick}>About</a>
        <a className='navbutton' name='blog' href='' onClick={props.onClick}>Blog</a>
      </nav>
    );
}

export default NavBar;
