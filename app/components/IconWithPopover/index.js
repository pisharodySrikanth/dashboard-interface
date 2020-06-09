/**
 *
 * IconWithPopover
 *
 */

import React, { memo, useState, useImperativeHandle, forwardRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

function IconWithPopover({
	iconClass,
	count,
	icon: Icon,
	children
}, ref) {
	const [anchorEl, setAnchorEl] = useState(null);

	useImperativeHandle(ref, () => ({
		close: handleClose
	}));

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

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
								{children}
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
}

IconWithPopover.defaultProps = {
	count: null,
}

IconWithPopover.propTypes = {
	icon: PropTypes.elementType.isRequired,
	iconClass: PropTypes.string,
	count: PropTypes.number,
};

export default memo(forwardRef(IconWithPopover));
