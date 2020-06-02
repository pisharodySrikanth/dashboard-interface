import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import menu from './menu';
import { Link } from 'react-router-dom';

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
        margin: '0 1rem 10px',
        color: '#3c4858',
        borderRadius: 3,
        '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: theme.boxShadow,
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
            }
        }
    },
    selected: {},
    itemText: {
        fontSize: '14px',
        fontWeight: 300
    },
    itemIcon: {
        color: 'inherit'
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
                {menu.map(({ text, icon: Icon, to }, index) => (
                    <ListItem
                        button
                        key={text}
                        component={Link}
                        to={to}
                        selected={index === 0}
                        classes={{
                            root: classes.listItem,
                            selected: {}
                        }}
                    >
                        <ListItemIcon className={classes.itemIcon}>
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