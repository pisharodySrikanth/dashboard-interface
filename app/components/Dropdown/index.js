/**
 *
 * Dropdown
 *
 */

import React, { memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';

function Dropdown({
	className,
	id,
	label,
	children,
	...props
}) {
	return (
		<FormControl variant="outlined" className={className}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<Select
				native
				label={label}
				{...props}
				inputProps={{
					id
				}}
			>
				<option aria-label="None" value="" disabled />
				{children}
			</Select>
		</FormControl>
	);
}

Dropdown.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	id: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.array
};

export default memo(Dropdown);
