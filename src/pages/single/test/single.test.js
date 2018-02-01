import React from 'react';
import renderer from 'react-test-renderer';

import Single from '../single';

it('renders correctly', () => {
  const tree = renderer
    .create(<Single
      gif={{}}
      error={false}
      match={{params: { id: '1'}}}
      getSingleGif={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
