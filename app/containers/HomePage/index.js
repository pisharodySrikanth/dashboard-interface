/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Dropdown from '../../components/Dropdown';
import Grid from '@material-ui/core/Grid';
import DataCard from './DataCard';
import { makeStyles } from '@material-ui/core/styles';
import { initializeDashboard, changeValue } from './actions';
import { changeCategory } from '../App/actions';
import reducer from './reducer';
import { makeSelectCategoryKeys, makeGetSelectedCatValues, getSelectedCategory } from '../App/selectors';
import { makeGetSelectedId, makeGetSelectedValue } from './selectors';
import saga from './saga';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  dropdownContainer: {
    width: '85%'
  },
  dropdownWrapper: {
    padding: theme.spacing(3)
  },
  formControl: {
    width: '100%'
  }
}));

function HomePage({
  replace,
  match,
  changeCategory,
  changeValue,
  initializeDashboard,
  values,
  categories,
  selectedCategory,
  selectedId,
  selectedValue
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'reportPage', saga });
  const classes = useStyles();

  useEffect(() => {
    const {
      category = '',
      id = ''
    } = match.params;
    initializeDashboard(category, id);
  }, []);

  const onCatChange = e => {
    changeCategory(e.target.value);
  }

  const onValChange = e => {
    changeValue(e.target.value);
    replace(`/${selectedCategory}/${e.target.value}`);
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.dropdownContainer}>
        <Grid item xs={6} className={classes.dropdownWrapper}>
          <Dropdown
            label='Select Category'
            value={selectedCategory}
            onChange={onCatChange}
            className={classes.formControl}
            id='outlined-category'
          >
            {categories.map(c => (
              <option
                key={c}
                value={c}
              >
                {c}
              </option>
            ))}
          </Dropdown>
        </Grid>
        <Grid item xs={6} className={classes.dropdownWrapper}>
          <Dropdown
            label={'Select Value'}
            value={selectedId}
            onChange={onValChange}
            className={classes.formControl}
            id='outlined-resources'
          >
            {values.map((v, index) => (
              <option
                key={index}
                value={v.id}
              >
                {v.name}
              </option>
            ))}
          </Dropdown>
        </Grid>
      </Grid>
      {selectedValue && (
        <DataCard
          data={selectedValue}
        />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategoryKeys(),
  values: makeGetSelectedCatValues(),
  selectedCategory: getSelectedCategory,
  selectedId: makeGetSelectedId(),
  selectedValue: makeGetSelectedValue()
});

export default connect(mapStateToProps, {
  initializeDashboard,
  replace,
  changeCategory,
  changeValue
})(HomePage);