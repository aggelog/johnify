import React from 'react';
import FacebookButton from '../fbShareButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<FacebookButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});