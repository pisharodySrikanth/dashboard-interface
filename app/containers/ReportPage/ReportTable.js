import React from 'react';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { initialState } from './reducer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    },
    headCol: {
        textTransform: 'capitalize'
    }
}));

const ReportTable = ({
    data
}) => {
    if(!data) {
        return null;
    }

    const classes = useStyles();
    const columns = Object.keys(data[0]);

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table 
                className={classes.table} 
                aria-label="reports table"
                // stickyHeader
            >
                <TableHead>
                    <TableRow>
                        {columns.map((c, index) => (
                            <TableCell
                                key={c}
                                // align={index === 0 ? 'left' : 'right'}
                                className={classes.headCol}
                            >
                                {c}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow 
                            key={index}
                        >
                            {columns.map((c, index) => (
                                <TableCell 
                                    // component="th" 
                                    // scope="row"
                                    // align={index === 0 ? 'left' : 'right'}
                                >
                                    {row[c]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = (state, props) => {
    //TO BE OPTIMIZED BY RESELECT
    const reportPage = state.reportPage || initialState;

    return {
        ...props,
        data: reportPage.reportData
    };
};

export default connect(mapStateToProps)(ReportTable);