import React from 'react';

import portamento from './assets/portamento.png';
import gittherepdx from './assets/gittherepdx.png';
import imbibeor from './assets/imbibe-or.png';
import thestream from './assets/thestream.png';
import neverfind from './assets/neverfind.png';
import cellautobota from './assets/cellautobota.png';

import './TeamProj.css'

function TeamProj() {
  return (
    <div className='teamprojholder'>
      <h2 className='teamprojtitle'>Projects</h2>
      <ul className='teamprojects'>
        <li className='teamproj'>
          <a href='https://gitTherePDX.herokuapp.com'>
            <img src={gittherepdx} alt='gitTherePDX'></img>
          </a>
        </li>

        <li className='teamproj'>
          <a href='https://imbibe-or.herokuapp.com'>
            <img src={imbibeor} alt='ImbibeOR'></img>
          </a>
        </li>

        <li className='teamproj'>
          <a href='https://github.com/timcombs/never-find'>
            <img src={neverfind} alt='It is Hard to Get to Where You Will Never Find'></img>
          </a>
        </li>

        <li className='teamproj'>
          <a href='https://portamento.herokuapp.com'>
            <img src={portamento} alt='Portamento'></img>
          </a>
        </li>

        <li className='teamproj'>
          <a href='http://www.arthackday.net/projects/tim-combs-quin-kennedy-joshua-hughes-the-stream'>
            <img src={thestream} alt='The Stream'></img>
          </a>
        </li>

        <li className='teamproj'>
          <a href='https://twitter.com/cellAutobota'>
            <img src={cellautobota} alt='CellAutobota'></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TeamProj;