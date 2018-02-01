import { connect } from 'react-redux';

import GifsGrid from '../../components/gifsGrid';

const mapStateToProps = ({ gifs }) => ({
  gifs: gifs.get('data').toJS()
});

export default connect(mapStateToProps)(GifsGrid);
