import React from 'react';
import ShowMore from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ShowMore showMore={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});