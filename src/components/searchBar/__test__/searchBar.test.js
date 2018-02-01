import React from 'react';
import SearchBar from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchBar changeSearchTextHandler={jest.fn()} performSearch={jest.fn()} searchValue="" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});