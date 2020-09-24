import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import BookSelector from '../BookSelector';

export default function BibleSelector() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeVersion, setActiveVersion] = React.useState('Version');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (e) => {
        console.log("Selection Made:",e);
        handleClose();
        setActiveVersion(e);
    }
    return (
        <>
            <Button className="MuiButton-colorInherit" onClick={handleClick}>{activeVersion} <ArrowDropDownIcon fontSize="small" /></Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                id="bible-select" >
                <MenuItem onClick={() => { handleChange('KJV')}} selected={activeVersion==='KJV'}>King James Version (KJV)</MenuItem>
                <MenuItem onClick={() => {handleChange('ESV')}} selected={activeVersion==='ESV'}>English Standard Version (ESV)</MenuItem>
            </Menu>

            <BookSelector />
        </>
    )
}
