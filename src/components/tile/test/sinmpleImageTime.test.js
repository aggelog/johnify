import React from 'react';
import renderer from 'react-test-renderer';

import SimpleImageTile from '../simpleImageTile';

it('renders correctly', () => {
  const tree = renderer
    .create(<SimpleImageTile url="www.google.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
