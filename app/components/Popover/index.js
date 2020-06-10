/**
 *
 * Popover
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

function Popover({
	children,
	anchorEl,
	handleClose
}) {
	return (
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
	);
}

Popover.defaultProps = {
	count: null,
}

Popover.propTypes = {
	handleClose: PropTypes.func.isRequired,
	anchorEl: PropTypes.node
};

export default memo(Popover);
