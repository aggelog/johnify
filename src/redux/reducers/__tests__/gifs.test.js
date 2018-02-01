import reducer, { initialState } from '../gifs';
import {searchActions} from '../../actions';
import { searchResults, moreSearch } from '../../../mocks/searchResultMock';

describe('gifs reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {type: null})).toBe(initialState);
  });

  it('should set the last search', () => {
    const state = reducer(initialState, searchActions.setLastSearch('test'));
    expect(state.get('lastSearch')).toBe('test');
  });

  it('should sanitize and add the data into the state', () => {
    const state = reducer(initialState, searchActions.getSearchByQuerySuccess(searchResults()));
    expect(state.get('next')).toBe("19");
    expect(state.getIn(['data', 'allIds']).toJS().length).toBe(20);
    expect(Object.keys(state.getIn(['data', 'byId']).toJS()).length).toBe(20);
  });

  it('should append data into the state', () => {
    const state = reducer(initialState, searchActions.getSearchByQuerySuccess(searchResults()));
    const newState = reducer(state, searchActions.loadMoreItemsSuccess(moreSearch()));
    expect(newState.get('next')).toBe("39");
    expect(newState.getIn(['data', 'allIds']).toJS().length).toBe(40);
    expect(Object.keys(newState.getIn(['data', 'byId']).toJS()).length).toBe(40);
  });
});