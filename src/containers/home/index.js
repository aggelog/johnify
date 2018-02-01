import { connect } from 'react-redux';

import Home from '../../pages/home/home';
import ApplicationLoading from '../../HoC/ApplicationLoading';

const mapStateToProps = ({ ui }) => ({
  globalLoading: ui.getIn(['global', 'loading'])
});

export default connect(mapStateToProps)(ApplicationLoading(Home));
