import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const BookSelector = ({books, activeBook, onSelectBook}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return books ? (
        <>
            <Button className="MuiButton-colorInherit" onClick={handleClick}>{activeBook!==null ? activeBook.name : "Book"} <ArrowDropDownIcon fontSize="small" /></Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                id="bible-select" >
                    {books.map(b => (<MenuItem key={b.id} onClick={() => { handleClose(); onSelectBook(b.id)}} selected={activeBook && activeBook.id===b.id}>{b.name}</MenuItem>))}
            </Menu>
        </>
    ) : (<></>);
}
