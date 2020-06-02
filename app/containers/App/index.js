/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from './Header';
import SideBar from './SideBar';

import GlobalStyle from '../../global-styles';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  leftSection: {
    flexGrow: 1,
    padding: `0 ${theme.spacing(3)}px`
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.leftSection}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    </div>
  );
}
