import React from 'react';

import portamento from './assets/portamento.png';
import gittherepdx from './assets/gittherepdx.png';
import imbibeor from './assets/imbibeor.png';

import './TeamProj.css'

function TeamProj() {
  return (
    <div className='teamprojholder'>
      <h2 className='teamprojtitle'>Team Projects</h2>
      <ul className='teamprojects'>
        <li className='teamproj'>
          <a href='https://portamento.herokuapp.com'>
            <img src={portamento} alt='Portamento'></img>
          </a>
        </li>

        <li className='teamproj'>
          <a href='https://imbibe-or.herokuapp.com'>
            <img src={imbibeor} alt='ImbibeOR'></img>
          </a>
        </li>

        <li className='teamproj'>
          <a href='https://gitTherePDX.herokuapp.com'>
            <img src={gittherepdx} alt='gitTherePDX'></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TeamProj;