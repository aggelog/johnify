import { connect } from 'react-redux';

import SearchBar from '../../components/searchBar';
import { uiActions, searchActions } from '../../redux/actions';
import * as uiSelectors from '../../redux/selectors/ui';

const mapStateToProps = (state) => ({
  searchValue: uiSelectors.getSearchText(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchTextHandler: text => dispatch(uiActions.changeSearchText(text)),
  performSearch: () => dispatch(searchActions.getSearchByQuery())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
