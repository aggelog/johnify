import React from 'react';
import renderer from 'react-test-renderer';

import CopyShareButton from '../copyShareButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<CopyShareButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
