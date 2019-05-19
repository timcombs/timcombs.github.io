import React from 'react';
import ReactDOM from 'react-dom';
import TeamProj from '../TeamProj';

it('renders w/out crashing', () => {
  //given
  const ul = document.createElement('ul');

  //then
  ReactDOM.render(<TeamProj />, ul);
  ReactDOM.unmountComponentAtNode(ul);
})