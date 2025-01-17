import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { makeSelectReportData } from './selectors';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
    },
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
    const classes = useStyles();

    if (!data || !data.length) {
        return (
            <Paper className={classes.container}>
                <Typography variant='h3'>
                    No data found
                </Typography>
            </Paper>
        );
    }

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

const mapStateToProps = createStructuredSelector({
    data: makeSelectReportData()
});

export default connect(mapStateToProps)(ReportTable);