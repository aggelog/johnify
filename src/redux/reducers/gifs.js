import { fromJS } from 'immutable';

import { searchActions, singleActions } from '../actions';

export const initialState = fromJS({
  next: 'n/a',
  lastSearch: '',
  data: {
    byId: {},
    allIds: []
  },
  single: {}
});

export const sanitizeSearchData = data =>
  data.results.reduce((res, item) => {
    res.allIds.push(item.id);
    res.byId[item.id] = {
      id: item.id,
      title: item.title === '' ? 'untitled' : item.title,
      gif: {
        dims: item.media[0].gif.dims,
        preview: item.media[0].gif.preview,
        url: item.media[0].gif.url
      }
    };
    return res;
  }, { byId: {}, allIds: [] });

export const sanitizeSingleData = data => {
  const gifData = data.results[data.next];
  return Object.assign({}, gifData.media[0].gif, { title: gifData.title === '' ? 'untitled' : gifData.title });
};

const gifs = (state = initialState, action) => {
  switch (action.type) {
    case searchActions.SET_LAST_SEARCH:
      return state
        .set('lastSearch', action.text);
    case searchActions.GET_SEARCH_BY_QUERY_SUCCESS:
      return state
        .set('data', fromJS(sanitizeSearchData(action.data)))
        .set('next', action.data.next);
    case searchActions.GET_MORE_SEARCH_RESULTS_SUCCESS: {
      const sanitizedData = sanitizeSearchData(action.data);
      const allIds = state.getIn(['data', 'allIds']).toJS();

      allIds.push(...sanitizedData.allIds);
      let byId = state.getIn(['data', 'byId']).toJS();
      byId = Object.assign({}, byId, sanitizedData.byId);

      const newData = { allIds, byId };
      return state
        .set('data', fromJS(newData))
        .set('next', action.data.next);
    }
    case singleActions.GET_SINGLE_GIF_SUCCESS:
      return state
        .set('single', fromJS(sanitizeSingleData(action.data)));
    case singleActions.CLEAR_SINGLE_GIF:
      return state
        .setIn('single', {});
    default:
      return state;
  }
};

export default gifs;
