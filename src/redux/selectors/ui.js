export const getSearchText = state => state.ui.getIn(['search', 'value']);
export const getLastSearchQuery = state => state.gifs.get('lastSearch');
export const getNext = state => state.gifs.get('next');
