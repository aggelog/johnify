import React from 'react';
import TileMedia from '../tileMedia';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<TileMedia url="www.google.com" showGif={true} previewUrl={"www.google.com"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});