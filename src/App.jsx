import React from 'react';
import TopBar from './components/TopBar';
import Viewer from './components/Viewer';
import { fetchBibles, fetchBooks, fetchChapter } from './state';

function App() {
    const [bibles, setBibles] = React.useState([]);
    const [books, setBooks] = React.useState([]);
    const [chapters, setChapters] = React.useState([]);
    const [activeBook, setActiveBook] = React.useState(null);
    const [activeBible, setActiveBible] = React.useState(null);
    const [activeChapter, setActiveChapter] = React.useState(null);

    const onSelectBible = (bibleId) => {
        setActiveBible(bibles.filter(b => b.id === bibleId)[0]);
        fetchBooks(bibleId, setBooks);
        setChapters([]);
        setActiveBook(null);
        setActiveChapter(null);
    }

    const onSelectBook = (bookId) => {
        setActiveBook(books.filter(b => b.id === bookId)[0]);
        setChapters(activeBook.chapters);
        setActiveChapter(null);
    }

    const onSelectChapter = (chapterId) => {
        fetchChapter(activeBible.id, chapterId, setActiveChapter);
    }

    React.useEffect(() => {
        fetchBibles();
    }, []);

    return (
        <>
            <TopBar
                bibles={bibles}
                books={books}
                chapters={chapters}
                activeBible={activeBible} onSelectBible={onSelectBible}
                activeBook={activeBook} onSelectBook={onSelectBook}
                activeChapter={activeChapter} onSelectChapter={onSelectChapter}
            />
            <Viewer Chapter={activeChapter} />
        </>
    );
}

export default App;
