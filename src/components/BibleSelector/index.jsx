import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const BibleSelector = ({bibles, activeBible, onSelectBible}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return bibles && bibles.length > 0 ? (
        <>
            <Button className="MuiButton-colorInherit" onClick={handleClick}>{activeBible ? activeBible.name : "Version"} <ArrowDropDownIcon fontSize="small" /></Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                id="bible-select" >
                    {bibles.map(b=>(<MenuItem key={b.id} onClick={() => { onSelectBible(b.id); handleClose();}} selected={activeBible===b.id}>{b.name} ({b.abbreviation})</MenuItem>))}
            </Menu>
        </>
    ) : (<Button className="MuiButton-secondary" disabled={true}>Version</Button>)
}
