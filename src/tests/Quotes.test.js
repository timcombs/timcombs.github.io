import React from 'react';
import ReactDOM from 'react-dom';

import Quotes from '../Quotes';

it('renders w/out crashing', () => {
  // given
  const div = document.createElement('div');

  // then
  ReactDOM.render(<Quotes />, div);
  ReactDOM.unmountComponentAtNode(div);
})