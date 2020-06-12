/**
 *
 * VisualisationPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { initializeChart } from './actions';
import makeSelectVisualisationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Attributes from './Attributes';
import ChartContainer from './ChartContainer';

export function VisualisationPage({ initializeChart }) {
  useInjectReducer({ key: 'visualisationPage', reducer });
  useInjectSaga({ key: 'visualisationPage', saga });

  useEffect(() => {
    initializeChart();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Visualisation</title>
      </Helmet>
      <Attributes />
      <ChartContainer />
    </div>
  );
}

VisualisationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  visualisationPage: makeSelectVisualisationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    initializeChart: () => dispatch(initializeChart()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(VisualisationPage);
