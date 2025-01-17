import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Dropdown from '../../components/Dropdown';
import DateToggle from '../../components/DateToggle';
import makeSelectVisualisationPage from './selectors';
import { makeSelectCategoryKeys } from '../App/selectors';
import { applyParams } from './actions';

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
  applyParams,
  categories,
  visualisationPage
}) => {
  const {
    granularity: parentGranularity,
    start: parentStart,
    end: parentEnd,
  } = visualisationPage;

  const today = Date.now();
  const classes = useStyles();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [category, setCategory] = useState('');
  const [granularity, setGranularity] = useState(parentGranularity);

  useEffect(() => {
    setGranularity(parentGranularity);
  }, [parentGranularity]);

  useEffect(() => {
    setStart(parentStart);
    setEnd(parentEnd);
  }, [parentStart, parentEnd]);

  const onCatChange = useCallback(e => setCategory(e.target.value), []);

  const handleBtnClick = () => {
    applyParams({
      start,
      end,
      category,
      granularity,
    });
  };

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
              onChange={setStart}
              variant="inline"
              autoOk
              maxDate={end}
              className={classes.date}
            />
            <DatePicker
              label="End Date"
              value={end}
              onChange={setEnd}
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
            disabled={!Boolean(category)}
            onClick={handleBtnClick}
          >
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  visualisationPage: makeSelectVisualisationPage(),
  categories: makeSelectCategoryKeys()
});

export default connect(
  mapStateToProps,
  {
    applyParams,
  },
)(Attributes);
