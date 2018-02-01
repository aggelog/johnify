import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundGif from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<NotFoundGif />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
