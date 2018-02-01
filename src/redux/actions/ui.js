const prefix = 'johnify/ui';

export const CHANGE_SEARCH_TEXT = `${prefix}/CHANGE_SEARCH_TEXT`;

export const SET_GLOBAL_LOADING = `${prefix}/SET_GLOBAL_LOADING`;

export const changeSearchText = text => ({ type: CHANGE_SEARCH_TEXT, text });

export const setGlobalLoading = value => ({ type: SET_GLOBAL_LOADING, value });
