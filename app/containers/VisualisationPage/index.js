/**
 *
 * VisualisationPage
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { initializeChart } from './actions';
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

const withConnect = connect(
  null,
  {
    initializeChart
  },
);

export default compose(withConnect)(VisualisationPage);
