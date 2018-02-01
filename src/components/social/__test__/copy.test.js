import React from 'react';
import CopyShareButton from '../copyShareButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<CopyShareButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});