import React from 'react';
import renderer from 'react-test-renderer';

import TileHeader from '../tileHeader';

it('renders correctly', () => {
  const tree = renderer
    .create(<TileHeader title="title" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
