import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DateToggle from '../../components/DateToggle';
import Button from '@material-ui/core/Button';
import IconWithPopover from '../../components/IconWithPopover';
import IconWithMenu from '../../components/IconWithMenu';

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
    valueBtn: {
        fontWeight: 400
    }
}));

const Attributes = props => {
    const [dateDimension, setDateDimension] = useState('day');
    const classes = useStyles();

    const onItemClick = item => console.log(item);

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
                        <Button
                            variant="contained"
                            disableElevation
                            className={classes.valueBtn}
                        >Last 30 Days</Button>

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
                        <DateToggle
                            value={dateDimension}
                            onChange={setDateDimension}
                        />
                        <IconWithMenu
                            icon={AddIcon}
                            iconClass={classes.addBtn}
                            onItemClick={onItemClick}
                            list={[{
                                text: 'vehicles'
                            }, {
                                text: 'people'
                            }, {
                                text: 'films'
                            }]}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Attributes;