import React from 'react';
import PropTypes from 'prop-types';

import { BigLoading } from '../../components/loading/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SearchBar, GifsGrid } from '../../containers/index';

import './home.css';

const Home = ({ globalLoading }) => (
  <div>
    {globalLoading
      ? <BigLoading />
      : (
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchBar />
            </Col>
          </Row>
          <GifsGrid />
        </Grid>
      )
    }
  </div>
);

Home.propTypes = {
  globalLoading: PropTypes.bool.isRequired
};

Home.defaultProps = {
  globalLoading: false
};

export default Home;
