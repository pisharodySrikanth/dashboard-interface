/**
 *
 * DateToggle
 *
 */

import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		borderRadius: '4px',
		overflow: 'hidden',
		width: '250px',
		border: '1px solid',
		borderColor: grey[300]
	},
	valueContainer: {
		display: 'flex',
		flex: '1'
	},
	item: {
		flex: '1',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(1),
	},
	title: {
		backgroundColor: grey[300],
		// flex: '2',
		fontWeight: 400
	},
	value: {
		cursor: 'pointer'
	},
	selected: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText
	}
}));

function DateToggle({
	// list,
	value,
	onChange
}) {
	const classes = useStyles();
	const list = [{
		value: 'day',
		title: 'Day'
	}, {
		value: 'hour',
		title: 'Hour'
	}];

	return (
		<Box className={classes.root} >
			<div className={`${classes.item} ${classes.title}`}>Date</div>
			{list.map(item => (
				<div
					className={` ${classes.value} ${classes.item} ${item.value === value ? classes.selected : ''}`}
					onClick={() => onChange(item.value)}
					key={item.value}
				>
					{item.title}
				</div>
			))}
			{/* <div className={classes.valueContainer}>
			</div> */}
		</Box>
	);
}

DateToggle.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default memo(DateToggle);
