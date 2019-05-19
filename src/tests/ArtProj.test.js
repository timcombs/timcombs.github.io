import React from 'react';
import ReactDOM from 'react-dom';
import ArtProj from '../ArtProj';

it('renders w/out crashing', () => {
  //given
  const ul = document.createElement('ul');

  //then
  ReactDOM.render(<ArtProj />, ul);
  ReactDOM.unmountComponentAtNode(ul);
})