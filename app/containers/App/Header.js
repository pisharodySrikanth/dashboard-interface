import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import IconWithMenu from '../../components/IconWithMenu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '50px',
        margin: '10px 0 30px'
    },
    pageTitle: {
        // fontSize: '16px'
    },
    searchIcon: {
        marginRight: theme.spacing(0.5),
        backgroundColor: '#fff',
        boxShadow: '0 2px 2px 0 hsla(0,0%,60%,.14), 0 3px 1px -2px hsla(0,0%,60%,.2), 0 1px 5px 0 hsla(0,0%,60%,.12)',
        transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1)',
        '&:hover': {
            backgroundColor: '#fff',
            boxShadow: '0 14px 26px -12px hsla(0,0%,60%,.42), 0 4px 23px 0 rgba(0,0,0,.12), 0 8px 10px -5px hsla(0,0%,60%,.2)'
        }
    },
    icon: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
}));

const notifications = [{
    text: 'Mike John responded to your email',
}, {
    text: 'You have 5 new tasks',
}, {
    text: 'You are now friend with Andrew',
}, {
    text: 'Another Notification',
}, {
    text: 'Another One',
}];

const userOptions = [{
    text: 'Profile',
    id: 'profile'
}, {
    text: 'Settings',
    id: 'settings'
}, {
    type: 'divider'
}, {
    text: 'Log out',
    id: 'logout'
}]

export default function Header() {
    const classes = useStyles();

    const onNotificationClick = (item) => {
        console.log(` Notification '${item.text}' clicked!!`);
    }

    const onUserOptionClick = item => {
        console.log(` User Option '${item.text}' clicked!!`);
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.pageTitle}>
                Dashboard
            </div>
            <div>
                <span>
                    <Input
                        placeholder='Search...'
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton className={classes.searchIcon}>
                        <SearchIcon />
                    </IconButton>
                </span>
                <IconButton className={classes.icon}>
                    <DashboardIcon />
                </IconButton>
                <IconWithMenu 
                    icon={NotificationsIcon}
                    iconClass={classes.icon}
                    count={5}
                    list={notifications}
                    onItemClick={onNotificationClick}
                />
                <IconWithMenu 
                    icon={PersonIcon}
                    iconClass={classes.icon}
                    list={userOptions}
                    onItemClick={onUserOptionClick}
                />
            </div>
        </nav>
    );
};