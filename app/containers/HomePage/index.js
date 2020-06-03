/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import Dropdown from '../../components/Dropdown';
import Grid from '@material-ui/core/Grid';
import DataTable from './DataTable';
import { categories, values } from './sampleData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	dropdownWrapper: {
		padding: theme.spacing(3)
	},
	formControl: {
		width: '100%'
	}
}));

function HomePage({
	replace,
	match
}) {
	const classes = useStyles();
	const {
		category = '',
		id = ''
	} = match.params;
	const [selectedCat, setSelectedCat] = useState(category);
	const [selectedVal, setSelectedVal] = useState(id);
	const catValues = values[selectedCat] || [];

	const onCatChange = e => {
		setSelectedCat(e.target.value);
		setSelectedVal('');
	}

	const onValChange = e => {
		setSelectedVal(e.target.value);
		replace(`/${selectedCat}/${e.target.value}`);
	}

	return (
		<div>
			<Grid container>
				<Grid item xs={6} className={classes.dropdownWrapper}>
					<Dropdown
						label='Select Category'
						value={selectedCat}
						onChange={onCatChange}
						className={classes.formControl}
						id='outlined-age-native-simple'
					>
						{categories.map(c => (
							<option
								key={c}
								value={c}
							>
								{c}
							</option>
						))}
					</Dropdown>
				</Grid>
				<Grid item xs={6} className={classes.dropdownWrapper}>
					<Dropdown
						label={'Select Value'}
						value={selectedVal}
						onChange={onValChange}
						className={classes.formControl}
						id='outlined-age-native-simple'
					>
						{catValues.map((v, index) => (
							<option
								key={index}
								value={index}
							>
								{v.name}
							</option>
						))}
					</Dropdown>
				</Grid>
			</Grid>
			{selectedVal && (
				<DataTable
					data={catValues[Number(selectedVal)]}
				/>
			)}
		</div>
	);
}

export default connect(null, {
	replace
})(HomePage);