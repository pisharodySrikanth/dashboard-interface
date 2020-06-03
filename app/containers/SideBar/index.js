/**
 *
 * SideBar
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import MenuList from './MenuList';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import menu from './menu';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	userName: {
		padding: theme.spacing(3),
		textAlign: 'center'
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	}
}));

function SideBar({
	selected
}) {
	const classes = useStyles();

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			anchor="left"
			elevation={24}
			PaperProps={{
				elevation: 16
			}}
		>
			<div className={classes.toolbar} />
			<Divider />
			<MenuList
				list={menu}
				selected={selected}
			/>
		</Drawer>
	)
};

export default SideBar;
