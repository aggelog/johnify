import React from 'react';
import TileHeader from '../tileHeader';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<TileHeader title="title" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});