import React from 'react';
import Home from '../home';
import renderer from 'react-test-renderer';

jest.mock('../../../containers/searchBar', () => 'SearchBar');
jest.mock('../../../containers/gifsGrid', () => 'GifsGrid');

it('renders correctly', () => {
  const tree = renderer
    .create(<Home globalLoading={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});