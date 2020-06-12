/**
 *
 * DateToggle
 *
 */

import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    overflow: 'hidden',
    width: '250px',
    border: '1px solid',
    borderColor: grey[300],
    '&:not(:last-child)': {
      marginRight: '10px',
    },
  },
  valueContainer: {
    display: 'flex',
    flex: '1',
  },
  item: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  title: {
    backgroundColor: grey[300],
    // flex: '2',
    fontWeight: 400,
  },
  value: {
    cursor: 'pointer',
    borderRight: `1px solid ${grey[300]}`,
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  cross: {
    margin: '0 5px',
    padding: '5px',
  },
  crossIcon: {
    width: '1rem',
    height: '1rem',
  },
}));

function DateToggle({ title, value, onChange, onCross }) {
  const classes = useStyles();
  const list = [
    {
      value: 'day',
      title: 'Day',
    },
    {
      value: 'hour',
      title: 'Hour',
    },
  ];

  return (
    <Box className={classes.root}>
      {title && (
        <div className={`${classes.item} ${classes.title}`}>{title}</div>
      )}
      {list.map(item => (
        <div
          className={` ${classes.value} ${classes.item} ${
            item.value === value ? classes.selected : ''
          }`}
          onClick={() => onChange(item.value)}
          key={item.value}
        >
          {item.title}
        </div>
      ))}
      {onCross && (
        <IconButton
          aria-label="delete"
          className={classes.cross}
          onClick={onCross}
        >
          <CloseIcon className={classes.crossIcon} />
        </IconButton>
      )}
    </Box>
  );
}

DateToggle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(DateToggle);
