import { connect } from 'react-redux';

import ShowMore from '../../components/showMore';
import { searchActions } from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
  showMore: () => dispatch(searchActions.loadMoreItems())
});

export default connect(undefined, mapDispatchToProps)(ShowMore);
