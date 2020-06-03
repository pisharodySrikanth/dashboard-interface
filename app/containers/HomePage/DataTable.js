import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 'auto'
    },
    table: {
        width: '100%'
    },
    attrKey: {
        textTransform: 'capitalize'
    }
}));

function DataTable({
    data
}) {
    const classes = useStyles();
    const formattedData = useMemo(() => {
        const result = {};

        for (const key in data) {
            const val = data[key];

            if (Array.isArray(val)) {
                break;
            }

            const formattedKey = key.replace('_', ' ');

            result[formattedKey] = val;
        }

        return result;
    }, [data]);

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Property</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(formattedData).map((key) => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row" className={classes.attrKey}>
                                {key}
                            </TableCell>
                            <TableCell align="right">{formattedData[key]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;
