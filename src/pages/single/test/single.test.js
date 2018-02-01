import React from 'react';
import Single from '../single';
import renderer from 'react-test-renderer';

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