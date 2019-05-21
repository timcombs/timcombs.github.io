import React from 'react';
import NavBar from './NavBar';

import './Info.css';

function Info() {
  return (
    <div>
    <section className='info'>
      <div className='name'>Tim Combs</div>
      <div className='interests'>Art/Code</div>
      <div className='interests'>JS developer loves collaborative teams both remote and in-person</div>
      <div className='motto'>Committed to making places better while stewarding technology toward social good</div>
    </section>
    <NavBar />
    </div>
  );
}

export default Info;
