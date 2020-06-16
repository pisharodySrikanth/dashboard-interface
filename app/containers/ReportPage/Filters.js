import React, { useState, useEffect, useRef } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { DatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { getSelectedCategory, getCategoryData } from '../App/selectors';
import makeSelectReportPage, {
  makeGetUnselectedCategories,
  makeSelectFilters
} from './selectors';
import {
  setCategoryFilter,
  removeFilter,
  setStartDate,
  setEndDate,
} from './actions';
import Tag from '../../components/Tag';
import IconWithMenu from '../../components/IconWithMenu';
import FilterValues from './FilterValues';
import { initialState } from './reducer';
import { changeCategory } from '../App/actions';

const useStyles = makeStyles(theme => ({
  date: {
    marginRight: '10px',
  },
  addBtn: {
    width: '40px',
    height: '40px',
    padding: 0,
    margin: '0 10px',
  }
}));

const Filters = ({
  categoryData,
  filters,
  categories,
  reportPage,
  setCategoryFilter,
  removeFilter,
  setStartDate,
  setEndDate,
}) => {
  const {
    startDate,
    endDate
  } = reportPage;
  const today = new Date();
  const [openFilter, setOpenFilter] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const anchors = useRef({});
  const classes = useStyles();

  useEffect(() => {
    let empty;

    for (const key in filters) {
      if (filters[key].length === 0) {
        empty = key;
        break;
      }
    }

    if (empty && anchors.current[empty]) {
      toggleFilter(empty);
    }
  }, [filters]);

  const toggleFilter = (key = null) => {
    setOpenFilter(key);
    setAnchorEl(key ? anchors.current[key] : null);
  };

  const onTagClick = (e, val) => {
    toggleFilter(val);
  };

  const onItemClick = i => {
    setCategoryFilter(i.text, []);
  };

  const handleClose = () => {
    toggleFilter();
    if (filters[openFilter].length === 0) {
      removeFilter(openFilter);
    }
  };

  const setFilters = list => {
    if (list.length) {
      setCategoryFilter(openFilter, list);
    } else {
      removeFilter(openFilter);
    }
    toggleFilter();
  };

  const handleFilterCross = value => {
    toggleFilter();
    removeFilter(value);
  };

  return (
    <>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={setStartDate}
        variant="inline"
        autoOk
        maxDate={endDate}
        className={classes.date}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={setEndDate}
        variant="inline"
        autoOk
        minDate={startDate}
        maxDate={today}
        className={classes.date}
      />
      {Object.keys(filters).map(f => (
        <Tag
          key={f}
          value={f}
          ref={i => (anchors.current[f] = i)}
          onClick={onTagClick}
          onCross={handleFilterCross}
        />
      ))}
      <IconWithMenu
        icon={AddIcon}
        iconClass={classes.addBtn}
        onItemClick={onItemClick}
        list={categories}
      />
      {openFilter && (
        <FilterValues
          list={categoryData[openFilter] || []}
          anchorEl={anchorEl}
          selected={filters[openFilter] || []}
          handleSave={setFilters}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  filters: makeSelectFilters(),
  categories: makeGetUnselectedCategories(),
  selectedCategory: getSelectedCategory,
  categoryData: getCategoryData,
  reportPage: makeSelectReportPage()
});

export default connect(
  mapStateToProps,
  {
    setCategoryFilter,
    changeCategory,
    removeFilter,
    setStartDate,
    setEndDate,
  },
)(Filters);
