import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';

it('renders w/out crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});