import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import menu from './menu';
import {Link} from 'react-router-dom';

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
    },
    listItem: {
        width: 'calc(100% - 2rem)',
        paddingTop: 10,
        paddingBottom: 10,
        margin: '0 1rem 10px'
    },
    itemText: {
        fontSize: '14px'
    }
  }));

export default function SideBar() {
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
            <List>
                {menu.map(({text, icon:Icon, to}, index) => (
                    <ListItem 
                        button 
                        key={text} 
                        component={Link} 
                        to={to}
                        className={classes.listItem}
                        selected={index === 0}
                    >
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                        <ListItemText 
                            primary={text} 
                            classes={{
                                primary: classes.itemText
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
};