/**
 *
 * IconWithMenu
 *
 */

import React, { memo, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
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
	icon
}) {
	const classes = useStyles();
	const popoverRef = useRef();
	
	const onMenuItemClick = (item) => {
		popoverRef.current.close();
		onItemClick(item);
	}

	return (
		<IconWithPopover
			count={count}
			icon={icon}
			iconClass={iconClass}
			ref={popoverRef}
		>
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
		</IconWithPopover>
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
