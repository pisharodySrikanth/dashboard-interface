/**
 *
 * ReportPage
 *
 */

import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import Attributes from './Attributes';
import ReportTable from './ReportTable';
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
			<ReportTable />
		</div>
	);
}

const withConnect = connect(
	null,
	{
		initializeReports
	},
);

export default compose(withConnect)(ReportPage);
