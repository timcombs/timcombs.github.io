import React from 'react';
import NavBar from './NavBar';

function Info() {
  return (
    <div>
    <section className='info'>
      <p className='name'>Tim Combs</p>
      <div className='interests'>Art/Code - Looking for JS developer role on collaborative teams, Remote or in-person</div>
      <div className='motto'>Committed to making places better while stewarding technology toward social good</div>
    </section>
    <NavBar />
    </div>
  );
}

export default Info;
