import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Dropdown from '../../components/Dropdown';
import DateToggle from '../../components/DateToggle';
import { selectAppState } from '../App/selectors';
import { initialState } from './reducer';
import {
  setStartDate,
  setEndDate,
  setCategory,
  setGranularity,
  applyParams,
} from './actions';

const useStyles = makeStyles(theme => ({
  row: {
    padding: theme.spacing(1),
    fontWeight: 300,
    fontSize: '16px',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 400,
  },
  date: {
    marginRight: '10px',
  },
  dropdown: {
    flex: '0 0 205px',
  },
  btnContainer: {
    marginTop: '10px',
  },
}));

const Attributes = ({
  start,
  end,
  setStartDate,
  setEndDate,
  setCategory,
  setGranularity,
  applyParams,
  category,
  categories,
  granularity,
}) => {
  const today = Date.now();
  const classes = useStyles();

  const onCatChange = useCallback(e => setCategory(e.target.value), []);

  return (
    <Card elevation={3}>
      <CardContent>
        <Grid container className={classes.row}>
          <Grid item xs={3} className={classes.title}>
            Filters
          </Grid>
          <Grid item xs={9} className={classes.content}>
            <DatePicker
              label="Start Date"
              value={start}
              onChange={setStartDate}
              variant="inline"
              autoOk
              maxDate={end}
              className={classes.date}
            />
            <DatePicker
              label="End Date"
              value={end}
              onChange={setEndDate}
              variant="inline"
              autoOk
              minDate={start}
              maxDate={today}
              className={classes.date}
            />
            <Dropdown
              label="Select Category"
              value={category}
              variant="standard"
              onChange={onCatChange}
              className={classes.dropdown}
              id="outlined-age-native-simple"
            >
              {categories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Dropdown>
          </Grid>
        </Grid>
        <Grid container className={classes.row}>
          <Grid item xs={3} className={classes.title}>
            Granularity
          </Grid>
          <Grid item xs={9} className={classes.content}>
            <DateToggle value={granularity} onChange={setGranularity} />
          </Grid>
        </Grid>
        <div className={classes.btnContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.saveBtn}
            onClick={applyParams}
          >
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state, props) => {
  // TO BE OPTIMIZED BY RESELECT
  const global = selectAppState(state);
  const visualisationPage = state.visualisationPage || initialState;

  return {
    ...props,
    ...visualisationPage,
    categories: Object.keys(global.categoryUrls),
  };
};

export default connect(
  mapStateToProps,
  {
    setStartDate,
    setEndDate,
    setCategory,
    setGranularity,
    applyParams,
  },
)(Attributes);
