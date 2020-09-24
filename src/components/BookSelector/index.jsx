import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ChapterSelector from '../ChapterSelector';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function BookSelector() {
    const classes = useStyles();
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            {/* Todo: Convert to Button and Menu */}
            <FormControl className={classes.formControl}>
                <InputLabel id="book-select-label">Book</InputLabel>
                <Select id="book-select" labelId="book-select-label" onChange={handleChange}>
                    <MenuItem value={'--'}>--</MenuItem>
                </Select>
            </FormControl>
            <ChapterSelector />
        </>
    )
}
