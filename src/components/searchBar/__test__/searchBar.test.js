import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchBar changeSearchTextHandler={jest.fn()} performSearch={jest.fn()} searchValue="" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
