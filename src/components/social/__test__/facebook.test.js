import React from 'react';
import renderer from 'react-test-renderer';

import FacebookButton from '../fbShareButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<FacebookButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
