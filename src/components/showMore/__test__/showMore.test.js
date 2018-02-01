import React from 'react';
import renderer from 'react-test-renderer';

import ShowMore from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<ShowMore showMore={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
