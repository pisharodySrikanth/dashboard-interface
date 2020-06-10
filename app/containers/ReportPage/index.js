/**
 *
 * ReportPage
 *
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { 
	MuiPickersUtilsProvider,
	DatePicker
} from '@material-ui/pickers';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectReportPage from './selectors';
import DateFnsUtils from '@date-io/date-fns';
import reducer from './reducer';
import saga from './saga';
import Attributes from './Attributes';
import {initializeReports} from './actions';

export function ReportPage({
	initializeReports
}) {
	useInjectReducer({ key: 'reportPage', reducer });
	useInjectSaga({ key: 'reportPage', saga });

	useEffect(() => {
		initializeReports();
	}, []);

	return (
		<div>
			<Attributes />
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	reportPage: makeSelectReportPage(),
});

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	};
}

const withConnect = connect(
	mapStateToProps,
	{
		initializeReports
	},
);

export default compose(withConnect)(ReportPage);
