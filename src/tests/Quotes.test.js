import React from 'react';
import ReactDOM from 'react-dom';

import Quotes from '../Quotes';

it('renders w/out crashing', async () => {
  // given
  const div = document.createElement('div');

  // then
  await ReactDOM.render(<Quotes />, div);
  await ReactDOM.unmountComponentAtNode(div);
});