import React from 'react';
import renderer from 'react-test-renderer';

import Tile from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<Tile title="hello world" gif={{}} id="1" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
