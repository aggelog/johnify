import React from 'react';
import TwitterButton from '../twitterShareButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<TwitterButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});