import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: '85%',
        overflow: 'visible',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 0px 20px 0px'
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: theme.boxShadow,
        margin: '-20px 24px 0',
        borderRadius: '4px'
    },
    headerTitle: {
        fontSize: '1rem'
    },
    table: {
        width: '100%'
    },
    attrRow: {
        minHeight: '40px',
        fontWeight: 300,
        alignItems: 'center',
        padding: theme.spacing(1),
        '&:not(:last-child)': {
            borderBottom: '1px solid #eee'
        },
        '&:last-child': {
            paddingBottom: 0
        }
    },
    attrKey: {
        textTransform: 'capitalize',
        fontWeight: 400
    }
}));

function DataCard({
    data
}) {
    const classes = useStyles();
    const {
        name,
        ...itemData
    } = data;
    const formattedData = useMemo(() => {
        const result = {};

        for (const key in itemData) {
            let val = itemData[key];

            if (Array.isArray(val)) {
                val = val.join(', ');
            }

            if(!val) {
                continue;
            }

            const formattedKey = key.replace(/_/g, ' ');

            result[formattedKey] = val;
        }

        return result;
    }, [data]);

    return (
        <Card className={classes.root}>
            <CardHeader 
                title={name} 
                className={classes.cardHeader}
                classes={{
                    title: classes.headerTitle
                }}
            />
            <CardContent>
                {Object.keys(formattedData).map((key) => (
                    <Grid 
                        container 
                        key={key}
                        className={classes.attrRow}
                    >
                        <Grid 
                            item
                            xs={4}
                            className={classes.attrKey}
                        >
                            {key}
                        </Grid>
                        <Grid 
                            item
                            xs={8}
                            // className={classes.attrKey}
                        >
                            {formattedData[key]}
                        </Grid>
                    </Grid>
                ))}
            </CardContent>
        </Card>
    );
}

export default DataCard;
