import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';

it('renders w/out crashing', () => {
  const nav = document.createElement('nav');
  ReactDOM.render(<NavBar />, nav);
  ReactDOM.unmountComponentAtNode(nav);
});