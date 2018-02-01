import React from 'react';
import renderer from 'react-test-renderer';

import TwitterButton from '../twitterShareButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<TwitterButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
