/**
 *
 * Tag
 *
 */

import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
	tag: {
		fontWeight: 400,
		'&:not(:last-child)': {
			marginRight: '10px'
		}
    }
}));

function Tag({
	value,
	onClick
}) {
	const classes = useStyles();

	return (
		<Button
			variant="contained"
			disableElevation
			className={classes.tag}
			onClick={() => onClick(value)}
		>{value}</Button>
	);
}

Tag.propTypes = {};

export default memo(Tag);
