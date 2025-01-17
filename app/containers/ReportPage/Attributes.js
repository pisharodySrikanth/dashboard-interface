import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {
  addDimension,
  removeDimension,
  changeDateDimension,
  applyParams,
} from './actions';
import {
  makeSelectDateDimension,
  makeSelectDimensions,
  makeGetUnselectedDimensions
} from './selectors';
import DateToggle from '../../components/DateToggle';
import IconWithMenu from '../../components/IconWithMenu';
import Tag from '../../components/Tag';
import Filters from './Filters';

const useStyles = makeStyles(theme => ({
  row: {
    padding: theme.spacing(1),
    fontWeight: 300,
    fontSize: '16px',
    alignItems: 'center',
  },
  title: {
    fontWeight: 400,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  addBtn: {
    width: '40px',
    height: '40px',
    padding: 0,
    margin: '0 10px',
  },
  saveBtn: {
    marginRight: '10px',
  },
  btnContainer: {
    marginTop: '10px',
  },
}));

const Attributes = ({
  dateDimension,
  dimensions,
  unselectedDimensions,
  addDimension,
  removeDimension,
  changeDateDimension,
  applyParams,
  removeDateDimension,
}) => {
  const classes = useStyles();

  return (
    <Card elevation={3}>
      <CardContent>
        <Grid container className={classes.row}>
          <Grid item xs={3} className={classes.title}>
            Filters
          </Grid>
          <Grid item xs={9} className={classes.content}>
            <Filters />
          </Grid>
        </Grid>
        <Grid container className={classes.row}>
          <Grid item xs={3} className={classes.title}>
            Dimensions
          </Grid>
          <Grid item xs={9} className={classes.content}>
            {dimensions.map(d =>
              d === 'date' ? (
                <DateToggle
                  title="Date"
                  value={dateDimension}
                  onChange={changeDateDimension}
                  onCross={removeDateDimension}
                />
              ) : (
                  <Tag key={d} value={d} onCross={removeDimension} />
                ),
            )}
            <IconWithMenu
              icon={AddIcon}
              iconClass={classes.addBtn}
              onItemClick={addDimension}
              list={unselectedDimensions}
            />
          </Grid>
        </Grid>
        <div className={classes.btnContainer}>
          <Button
            variant="contained"
            color="primary"
            disabled={dimensions.length === 0}
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

const mapStateToProps = createStructuredSelector({
  dateDimension: makeSelectDateDimension(),
  dimensions: makeSelectDimensions(),
  unselectedDimensions: makeGetUnselectedDimensions(),
});

const mapDispatchToProps = dispatch => ({
  addDimension: item => dispatch(addDimension(item.text)),
  removeDimension: d => dispatch(removeDimension(d)),
  removeDateDimension: () => dispatch(removeDimension('date')),
  changeDateDimension: d => dispatch(changeDateDimension(d)),
  applyParams: d => dispatch(applyParams(d)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Attributes);
