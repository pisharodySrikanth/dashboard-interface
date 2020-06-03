import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from './MenuList';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
        width: 'calc(100% - 2rem)',
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
    itemText: {
        fontSize: '14px',
        fontWeight: 300
    },
    itemIcon: {
        color: 'inherit'
    }
}));

export default function MenuItem({
    id,
    text,
    icon: Icon,
    to,
    subMenus,
    level,
    selected,
    toggleParent
}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = e => {
        e.stopPropagation();
        setExpanded(!expanded);
    };
    const propagateExpansion = () => {
        setExpanded(true);
        toggleParent && toggleParent();
    }
    const hasChildren = subMenus.length > 0;

    useEffect(() => {
        if (hasChildren || id !== selected) {
            return;
        }

        toggleParent && toggleParent();
    }, []);

    let rightIcon = null;
    let listHtml = null;
    let itemProps = {
        component: Link,
        to
    };

    if (hasChildren) {
        itemProps = {
            component: 'div',
            onClick: toggleExpanded
        };
        rightIcon = expanded ? <ExpandLess /> : <ExpandMore />;
        listHtml = (
            <Collapse in={expanded} timeout="auto">
                <MenuList
                    list={subMenus}
                    level={level + 1}
                    selected={selected}
                    toggleParent={propagateExpansion}
                />
            </Collapse>
        );
    }

    return (
        <>
            <ListItem
                button
                key={text}
                selected={id === selected}
                classes={{
                    root: classes.listItem
                }}
                {...itemProps}
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
                {rightIcon}
            </ListItem>
            {listHtml}
        </>
    );
}

MenuItem.defaultProps = {
    subMenus: []
}