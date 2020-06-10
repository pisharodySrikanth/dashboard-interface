import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { initialState } from './reducer';
import { addDimension, removeDimension, changeDateDimension, applyParams } from './actions';
import { selectAppState } from '../App/selectors';
import AddIcon from '@material-ui/icons/Add';
import DateToggle from '../../components/DateToggle';
import IconWithMenu from '../../components/IconWithMenu';
import Tag from '../../components/Tag';
import Filters from './Filters';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    row: {
        padding: theme.spacing(1),
        fontWeight: 300,
        fontSize: '16px',
        alignItems: 'center'
    },
    title: {
        fontWeight: 400
    },
    content: {
        display: 'flex',
        alignItems: 'center',
    },
    addBtn: {
        width: '40px',
        height: '40px',
        padding: 0,
        margin: '0 10px'
    },
    saveBtn: {
        marginRight: '10px'
    },
    btnContainer: {
        marginTop: '10px'
    }
}));

const Attributes = ({
    dateDimension,
    dimensions,
    unselectedDimensions,
    addDimension,
    removeDimension,
    changeDateDimension,
    applyParams
}) => {
    const classes = useStyles();

    return (
        <Card elevation={3}>
            <CardContent>
                <Grid container className={classes.row}>
                    <Grid
                        item
                        xs={3}
                        className={classes.title}
                    >
                        Filters
                    </Grid>
                    <Grid
                        item
                        xs={9}
                        className={classes.content}
                    >
                        <Filters 
                            addClass={classes.addBtn}
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.row}>
                    <Grid
                        item
                        xs={3}
                        className={classes.title}
                    >
                        Dimensions
                    </Grid>
                    <Grid
                        item
                        xs={9}
                        className={classes.content}
                    >
                        {dimensions.map(d => {
                            return d === 'date' ? (
                                <DateToggle
                                    value={dateDimension}
                                    onChange={changeDateDimension}
                                />
                            ) : (
                                    <Tag
                                        key={d}
                                        value={d}
                                        onCross={removeDimension}
                                    />
                                );
                        })}
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
                        className={classes.saveBtn}
                        onClick={applyParams}
                    >
                        Save
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

const mapStateToProps = (state, props) => {
    //TO BE OPTIMIZED BY RESELECT
    const global = selectAppState(state);
    const reportPage = state.reportPage || initialState;
    const dimensions = reportPage.dimensions;

    const allDimensions = Object.keys(global.categoryUrls);

    let unselectedDimensions = allDimensions.filter(d => !dimensions.includes(d));

    if (!reportPage.dateDimension) {
        unselectedDimensions.unshift('date');
    }

    return {
        ...props,
        dateDimension: reportPage.dateDimension,
        dimensions,
        unselectedDimensions: unselectedDimensions.map(d => ({ text: d }))
    };
};

const mapDispatchToProps = dispatch => ({
    addDimension: item => dispatch(addDimension(item.text)),
    removeDimension: d => dispatch(removeDimension(d)),
    changeDateDimension: d => dispatch(changeDateDimension(d)),
    applyParams: d => dispatch(applyParams(d))
});

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);