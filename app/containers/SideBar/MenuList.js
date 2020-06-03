import React from 'react';
import List from '@material-ui/core/List';
import MenuItem from './MenuItem';

export default function MenuList({
    list,
    level = 0,
    selected,
    toggleParent
}) {
    return (
        <List
            style={{
                paddingLeft: `${level}rem`
            }}
        >
            {list.map(item => (
                <MenuItem
                    {...item}
                    key={item.text}
                    selected={selected}
                    level={level}
                    toggleParent={toggleParent}
                />
            ))}
        </List>
    );
}