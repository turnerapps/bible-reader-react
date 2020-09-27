import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import SanitizedHTML from 'react-sanitized-html';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBarSpacer: theme.mixins.toolbar
}));

export default function Viewer({book, chapter}) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.appBarSpacer} />
            <Container>
                <Inner book={book} chapter={chapter} />
            </Container>
        </>
    );
}

const Inner = ({book, chapter}) => {
    return chapter ? (<><h1>{book.name} {chapter.number}</h1>
        <SanitizedHTML html={chapter.content} allowedTags={['p', 'span']}/></>) : (<div>Please select a chapter to display.</div>);
}