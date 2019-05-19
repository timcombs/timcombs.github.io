import React from 'react';
import ReactDOM from 'react-dom';
import Info from '../Info';

it('renders w/out crashing', () => {
  // given
  const div = document.createElement('div');

  // then
  ReactDOM.render(<Info />, div);
  ReactDOM.unmountComponentAtNode(div);
});

