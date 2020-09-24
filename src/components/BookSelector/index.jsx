import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChapterSelector from '../ChapterSelector';

export default function BookSelector() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeVersion, setActiveVersion] = React.useState('Book');

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
                <MenuItem onClick={() => { handleChange('Genesis')}} selected={activeVersion==='Genesis'}>Genesis</MenuItem>
                <MenuItem onClick={() => {handleChange('Exodus')}} selected={activeVersion==='Exodus'}>Exodus</MenuItem>
                <MenuItem onClick={() => {handleChange('Leviticus')}} selected={activeVersion==='Leviticus'}>Leviticus</MenuItem>
                <MenuItem onClick={() => {handleChange('Numbers')}} selected={activeVersion==='Numbers'}>Numbers</MenuItem>
            </Menu>


            {/* Todo: Convert to Button and Menu */}

            <ChapterSelector />
        </>
    )
}
