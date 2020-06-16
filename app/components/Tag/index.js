/**
 *
 * Tag
 *
 */

import React, { memo, forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	tag: {
		fontWeight: 400,
		'&:not(:last-child)': {
			marginRight: '10px'
		}
	},
	cross: {
		marginLeft: '5px',
		padding: '5px'
	},
	crossIcon: {
		width: '1rem',
		height: '1rem'
	}
}));

function Tag({
	value,
	onClick,
	onCross
}, ref) {
	const classes = useStyles();

	const handleCrossClick = e => {
		e.stopPropagation();
		onCross(value);
	}

	return (
		<Button
			variant="contained"
			disableElevation
			className={classes.tag}
			ref={ref}
			onClick={e => onClick && onClick(e, value)}
		>
			{value}
			{onCross && (
				<IconButton 
					component='div'
					aria-label="delete"
					className={classes.cross}
					onClick={handleCrossClick}
				>
					<CloseIcon className={classes.crossIcon} />
				</IconButton>
			)}
		</Button>
	);
}

export default forwardRef(Tag);
