import React from 'react';
import renderer from 'react-test-renderer';

import TileMedia from '../tileMedia';

it('renders correctly', () => {
  const tree = renderer
    .create(<TileMedia url="www.google.com" showGif={true} previewUrl={"www.google.com"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
