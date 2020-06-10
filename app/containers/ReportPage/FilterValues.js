import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '../../components/Popover';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    formControl: {
        width: '100%',
        marginBottom: '5px'
    },
    formGroup: {
        width: '100%',
        overflow: 'auto',
        maxHeight: '500px',
        flexWrap: 'nowrap'
    },
    saveBtn: {
        marginRight: '10px'
    }
}));

const FilterValues = ({
    anchorEl,
    list,
    selected,
    handleClose,
    handleSave
}) => {
    const classes = useStyles();
    const [values, setValues] = useState(selected);

    const handleChange = e => {
        const updated = [...values];

        if(e.target.checked) {
            updated.push(e.target.name);
        } else {
            const index = updated.indexOf(e.target.name);
            if(index !== -1) {
                updated.splice(index, 1);
            }
        }

        setValues(updated);
    }

    return (
        <Popover
            anchorEl={anchorEl}
            handleClose={handleClose}
        >
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <FormGroup className={classes.formGroup}>
                        {list.map(item => {
                            const isSelected = values.includes(item.id);

                            return (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isSelected}
                                            onChange={handleChange}
                                            name={item.id}
                                        />
                                    }
                                    label={item.name}
                                />
                            );
                        })}
                    </FormGroup>
                </FormControl>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.saveBtn}
                        onClick={() => handleSave(values)}
                    >
                        Save
                    </Button>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Popover>
    );
}

export default FilterValues;