import React from 'react';
import DownloadButton from '../downloadButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<DownloadButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});