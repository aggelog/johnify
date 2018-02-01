import React from 'react';
import SimpleImageTile from '../simpleImageTile';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<SimpleImageTile url="www.google.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});