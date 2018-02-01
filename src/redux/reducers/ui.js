import { fromJS } from 'immutable';

import { uiActions, singleActions } from '../actions';

export const initialState = fromJS({
  search: {
    value: ''
  },
  single: {
    error: false,
  },
  global: {
    loading: false
  }
});

const ui = (state = initialState, action) => {
  switch (action.type) {
    case uiActions.CHANGE_SEARCH_TEXT:
      return state
        .setIn(['search', 'value'], action.text);
    case uiActions.SET_GLOBAL_LOADING:
      return state
        .setIn(['global', 'loading'], action.value);
    case singleActions.GET_SINGLE_GIF_FAILURE:
      return state
        .setIn(['single', 'error'], true);
    case singleActions.RESET_SINGLE_ERROR:
      return state
        .setIn(['single', 'error'], false);
    default:
      return state;
  }
};

export default ui;
