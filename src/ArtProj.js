import React from 'react';

import thestream from './assets/thestream.png';
import neverfind from './assets/neverfind.png';

import './ArtProj.css';

function ArtProj() {
  return (
    <div className='artprojholder'>
      <h2 className='artprojtitle'>Art/Code Projects</h2>
      <ul className='artprojects'>
      <li className='artproj'>
          <a href='https://github.com/timcombs/never-find'>
            <img src={neverfind} alt='It is Hard to Get to Where You Will Never Find'></img>
          </a>
        </li>

        <li className='artproj'>
          <a href='http://www.arthackday.net/projects/tim-combs-quin-kennedy-joshua-hughes-the-stream'>
            <img src={thestream} alt='The Stream'></img>
          </a>
        </li>

        <li className='artproj'>
          <a href=''>
            {/* <img src={} alt=''></img> */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ArtProj;
