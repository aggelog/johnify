import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../home';

jest.mock('../../../containers/searchBar', () => 'SearchBar');
jest.mock('../../../containers/gifsGrid', () => 'GifsGrid');

it('renders correctly', () => {
  const tree = renderer
    .create(<Home globalLoading={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
