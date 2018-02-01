import reducer, { initialState } from '../ui';
import { uiActions, singleActions } from '../../actions';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, { type:null })).toBe(initialState);
  });

  it('should set the global loading', () => {
    const state = reducer(initialState, uiActions.setGlobalLoading(true));
    expect(state.getIn(['global', 'loading'])).toBe(true);
    const newState = reducer(state, uiActions.setGlobalLoading(false));
    expect(newState.getIn(['global', 'loading'])).toBe(false);
  });

  it('should set error in the single state', () => {
    const state = reducer(initialState, singleActions.getSingleGifFailure({}));
    expect(state.getIn(['single', 'error'])).toBe(true);
  });

  it('should reset the error in the single state', () => {
    const state = reducer(initialState, singleActions.getSingleGifFailure({}));
    expect(state.getIn(['single', 'error'])).toBe(true);
    const newState = reducer(state, singleActions.resetSingleError());
    expect(newState.getIn(['single', 'error'])).toBe(false);
  });
});
