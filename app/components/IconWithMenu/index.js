/**
 *
 * IconWithMenu
 *
 */

import React, { memo, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import IconWithPopover from '../IconWithPopover';

const useStyles = makeStyles(theme => ({
	menu: {
		minWidth: '10rem'
	},
	item: {
		margin: '0 5px',
		width: 'calc(100% - 10px)',
		transitionProperty: 'background-color,color',
		borderRadius: '.125rem',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			boxShadow: theme.boxShadow
		}
	},
	divider: {
		marginTop: 8,
		marginBottom: 8
	}
}));

function IconWithMenu({
	iconClass,
	count,
	list,
	onItemClick,
	icon:Icon
}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const classes = useStyles();

	const onMenuItemClick = (item) => {
		setAnchorEl(null);
		onItemClick(item);
	}

	const handleClick = useCallback((event) => {
		setAnchorEl(event.currentTarget);
	}, []);

	const handleClose = useCallback(() => {
		setAnchorEl(null);
	}, []);

	return (
		<>
			<IconButton
				className={iconClass}
				onClick={handleClick}
			>
				<Badge
					badgeContent={count}
					color='secondary'
				>
					<Icon />
				</Badge>
			</IconButton>
			<IconWithPopover
				anchorEl={anchorEl}
				handleClose={handleClose}
			>
				<MenuList
					classes={{
						root: classes.menu
					}}
				>
					{list.map((item, index) => item.type == 'divider' ? (
						<Divider 
							className={classes.divider} 
							key={`divider${index}`}
						/>
					) : (
							<MenuItem
								key={item.text || item.type}
								onClick={() => onMenuItemClick(item)}
								classes={{
									root: classes.item
								}}
							>
								{item.text}
							</MenuItem>
						))}
				</MenuList>
			</IconWithPopover>
		</>
	);
}

IconWithMenu.defaultProps = {
	count: null,
	list: [],
	onItemClick: PropTypes.func.isRequired
}

IconWithMenu.propTypes = {
	icon: PropTypes.elementType.isRequired,
	iconClass: PropTypes.string,
	count: PropTypes.number,
	list: PropTypes.array
};

export default memo(IconWithMenu);
