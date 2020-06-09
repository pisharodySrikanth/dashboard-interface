/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, {useMemo} from 'react';
import { Switch, Route } from 'react-router-dom';
import { getMatchedRoute } from '../../utils/routeFunctions';
import {connect} from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import routes from '../../routes';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from './Header';
import SideBar from '../SideBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import saga from './saga';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	leftSection: {
		flexGrow: 1,
		padding: `0 ${theme.spacing(3)}px`
	}
}));

function App(props) {
	useInjectSaga({ key: 'global', saga });
	const classes = useStyles();
	const matchedRoute = useMemo(() => {
		return getMatchedRoute(props.location)
	}, [props.location.pathname]);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<SideBar 
				selected={matchedRoute ? matchedRoute.page : null}
			/>
			<div className={classes.leftSection}>
				<Header />
				<Switch>
					{routes.map(route => (
						<Route 
							key={route.page}
							{...route} 
						/>
					))}
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</div>
	);
}

const mapStateToProps = ({router: { location }}, props) => ({
	...props,
	location
});

export default connect(mapStateToProps)(App);