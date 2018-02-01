import { connect } from 'react-redux';

import Single from '../../pages/single/single';
import { singleActions } from '../../redux/actions';
import ApplicationLoading from '../../HoC/ApplicationLoading';

const mapStateToProps = ({ ui, gifs }) => ({
  globalLoading: ui.getIn(['global', 'loading']),
  error: ui.getIn(['single', 'error']),
  gif: { ...gifs.get('single').toJS() }
});

const mapDispatchToProps = dispatch => ({
  getSingleGif: id => dispatch(singleActions.getSingleGif(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationLoading(Single));
