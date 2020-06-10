import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { selectAppState } from '../App/selectors';
import { setCategoryFilter, removeFilter } from './actions';
import Tag from '../../components/Tag';
import AddIcon from '@material-ui/icons/Add';
import IconWithMenu from '../../components/IconWithMenu';
import FilterValues from './FilterValues';
import { initialState } from './reducer';
import { changeCategory } from '../App/actions';

const Filters = ({
    categoryData,
    filters,
    categories,
    addClass,
    setCategoryFilter,
    removeFilter
}) => {
    const [openFilter, setOpenFilter] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const anchors = useRef({});

    useEffect(() => {
        let empty;

        for(let key in filters) {
            if(filters[key].length === 0) {
                empty = key;
                break;
            }
        }
        
        if(empty && anchors.current[empty]) {
            toggleFilter(empty);
        }
    }, [filters]);

    const toggleFilter = (key=null) => {
        setOpenFilter(key);
        setAnchorEl(key ? anchors.current[key] : null);
    }

    const onTagClick = (e, val) => {
        toggleFilter(val);
    }

    const onItemClick = i => {
        setCategoryFilter(i.text, []);
    };

    const handleClose = () => {
        toggleFilter();
        if(filters[openFilter].length === 0) {
            removeFilter(openFilter);
        }
    }

    const setFilters = (list) => {
        if(list.length) {
            setCategoryFilter(openFilter, list);
        } else {
            removeFilter(openFilter);
        }
        toggleFilter();
    }

    const handleFilterCross = value => {
        toggleFilter();
        removeFilter(value);
    }

    return (
        <>
            {Object.keys(filters).map(f => (
                <Tag
                    key={f}
                    value={f}
                    ref={i => anchors.current[f] = i}
                    onClick={onTagClick}
                    onCross={handleFilterCross}
                />
            ))}
            <IconWithMenu
                icon={AddIcon}
                iconClass={addClass}
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

const mapStateToProps = (state, props) => {
    const global = selectAppState(state);
    const reportPage = state.reportPage || initialState;
    const filters = reportPage.filters;
    const allCategories = Object.keys(global.categoryUrls);
    const filterKeys = Object.keys(filters);
    const unselectedCategories = allCategories.filter(c => !filterKeys.includes(c));

    return {
        ...props,
        filterList: Object.keys(filters),
        filters,
        selectedCategory: global.selectedCategory,
        categories: unselectedCategories.map(c => ({ text: c })),
        categoryData: global.categoryData
    };
};

export default connect(mapStateToProps, {
    setCategoryFilter,
    changeCategory,
    removeFilter
})(Filters);