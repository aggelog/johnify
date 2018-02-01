const prefix = 'johnify/search';

export const GET_SEARCH_BY_QUERY = `${prefix}/GET_SEARCH_BY_QUERY`;
export const GET_SEARCH_BY_QUERY_SUCCESS = `${prefix}/GET_SEARCH_BY_QUERY_SUCCESS`;

export const SET_LAST_SEARCH = `${prefix}/SET_LAST_SEARCH`;

export const GET_MORE_SEARCH_RESULTS = `${prefix}/GET_MORE_SEARCH_RESULTS`;
export const GET_MORE_SEARCH_RESULTS_SUCCESS = `${prefix}/GET_MORE_SEARCH_RESULTS_SUCCESS`;

export const getSearchByQuery = () => ({ type: GET_SEARCH_BY_QUERY });
export const getSearchByQuerySuccess = data => ({ type: GET_SEARCH_BY_QUERY_SUCCESS, data});

export const setLastSearch = text => ({ type: SET_LAST_SEARCH, text });

export const loadMoreItems = () => ({ type: GET_MORE_SEARCH_RESULTS });
export const loadMoreItemsSuccess = data => ({ type: GET_MORE_SEARCH_RESULTS_SUCCESS, data});
