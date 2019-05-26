import React from 'react';
import NavBar from './NavBar';

import './Info.css';

function Info() {
  return (
    <div className='infocontainer'>
    <section className='info'>
      <div className='name'>Tim Combs</div>
      <div className='interests'>Art/Code/Collaborative Teams</div>
      <div className='interests'>JS developer interested in remote & in-person opportunities</div>
      <div className='motto'>Making places better while stewarding technology toward social good</div>
    </section>
    <NavBar />
    </div>
  );
}

export default Info;
