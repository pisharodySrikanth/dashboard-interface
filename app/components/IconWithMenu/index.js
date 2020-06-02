/**
 *
 * IconWithMenu
 *
 */

import React, { memo, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

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
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onMenuItemClick = (item) => {
		handleClose();
		onItemClick(item);
	}

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
			<Popper open={Boolean(anchorEl)} anchorEl={anchorEl} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom' }}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									classes={{
										root: classes.menu
									}}
								>
									{list.map(item => item.type == 'divider' ? (
										<Divider className={classes.divider} />
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
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
}

IconWithMenu.defaultProps = {
	count: null,
	list: []
}

IconWithMenu.propTypes = {
	icon: PropTypes.elementType.isRequired,
	iconClass: PropTypes.string,
	count: PropTypes.number,
	list: PropTypes.array
};

export default memo(IconWithMenu);
