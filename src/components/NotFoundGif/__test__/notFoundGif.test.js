import React from 'react';
import NotFoundGif from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<NotFoundGif />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});