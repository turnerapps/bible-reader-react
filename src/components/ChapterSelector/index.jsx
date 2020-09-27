import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export function ChapterSelector({chapters, activeChapter, onSelectChapter}) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return chapters ? (
        <>
            <Button className="MuiButton-colorInherit" onClick={handleClick}>{activeChapter ? activeChapter.number : "Chapter"} <ArrowDropDownIcon fontSize="small" /></Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                id="bible-select" >
                    {chapters.map(c=>(<MenuItem key={c.number} onClick={() => { handleClose(); onSelectChapter(c.id) }} selected={activeChapter && activeChapter.number === c.number}>{c.number}</MenuItem>))}
            </Menu>
        </>
    ) : (<></>);
}
