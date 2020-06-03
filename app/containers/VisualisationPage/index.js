/**
 *
 * VisualisationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVisualisationPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function VisualisationPage() {
  useInjectReducer({ key: 'visualisationPage', reducer });
  useInjectSaga({ key: 'visualisationPage', saga });

  return (
    <div>
      <Helmet>
        <title>VisualisationPage</title>
        <meta name="description" content="Description of VisualisationPage" />
      </Helmet>
      Visualisation Page
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(VisualisationPage);
