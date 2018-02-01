import React from 'react';
import Loading from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Loading />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});