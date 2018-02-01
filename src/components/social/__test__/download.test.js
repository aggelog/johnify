import React from 'react';
import renderer from 'react-test-renderer';

import DownloadButton from '../downloadButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<DownloadButton url={"www.google.com"} size={32} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
