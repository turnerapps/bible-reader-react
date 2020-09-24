import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function ChapterSelector() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeVersion, setActiveVersion] = React.useState('Chapter');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (e) => {
        console.log("Selection Made:", e);
        handleClose();
        setActiveVersion(e);
    };

    return (
        <>
            <Button className="MuiButton-colorInherit" onClick={handleClick}>{activeVersion} <ArrowDropDownIcon fontSize="small" /></Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                id="bible-select" >
                <MenuItem onClick={() => { handleChange('1') }} selected={activeVersion === '1'}>1</MenuItem>
                <MenuItem onClick={() => { handleChange('2') }} selected={activeVersion === '2'}>2</MenuItem>
                <MenuItem onClick={() => { handleChange('3') }} selected={activeVersion === '3'}>3</MenuItem>
                <MenuItem onClick={() => { handleChange('4') }} selected={activeVersion === '4'}>4</MenuItem>
            </Menu>
        </>
    )
}
