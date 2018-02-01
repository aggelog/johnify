import React from 'react';
import Tile from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Tile title="hello world" gif={{}} id="1" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});