import React from 'react';
import Viewer from './components/Viewer';
import { fetchBibles, fetchBooks, fetchChapter } from './state';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {BibleSelector} from './components/BibleSelector';
import {BookSelector} from './components/BookSelector';
import {ChapterSelector} from './components/ChapterSelector';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function App() {
    const [bibles, setBibles] = React.useState([]);
    const [books, setBooks] = React.useState(null);
    const [chapters, setChapters] = React.useState(null);
    const [activeBook, setActiveBook] = React.useState(null);
    const [activeBible, setActiveBible] = React.useState(null);
    const [activeChapter, setActiveChapter] = React.useState(null);

    const classes = useStyles();

    const onSelectBible = (bibleId) => {
        setActiveBible(bibles.filter(b => b.id === bibleId)[0]);
        setChapters(null, setActiveBook(null, setActiveChapter(null, fetchBooks(bibleId, setBooks))));
    }

    const onSelectBook = (bookId) => {
        setActiveBook(books.filter(b => b.id === bookId)[0]); 
        setChapters(books.filter(b => b.id === bookId)[0].chapters);
        setActiveChapter(null);
    }

    const onSelectChapter = (chapterId) => {
        fetchChapter(activeBible.id, chapterId, setActiveChapter);
    }

    React.useEffect(() => {
        fetchBibles(setBibles);
    }, []);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Bible Reader
                </Typography>
                    <BibleSelector bibles={bibles} activeBible={activeBible} onSelectBible={onSelectBible} />
                    <BookSelector books={books} activeBook={activeBook} onSelectBook={onSelectBook} />
                    <ChapterSelector chapters={chapters} activeChapter={activeChapter} onSelectChapter={onSelectChapter} />
                </Toolbar>
            </AppBar>
            <Viewer book={activeBook} chapter={activeChapter} />
        </>
    );
}

export default App;
