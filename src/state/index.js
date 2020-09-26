import secrets from '../.secrets';

export async function fetchBibles(setBibles) {
    try {
        const response = await fetch(`https://api.scripture.api.bible/v1/bibles`, {
            method: 'GET',
            headers: { 'api-key': secrets.apikey }
        });
        const data = await response.json();
        let bibles = [];
        data.data.forEach(b => { bibles.push({ id: b.id, name: b.name, abbreviation: b.abbreviation }) });
        setBibles(bibles);
    } catch (ex) {
        setBibles([]);
        console.log("Error!", ex);
    }
}

export async function fetchBooks(bibleId, setBooks) {
    let data;
    let books = [];
    try {
        const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${versionId}/books?include-chapters-and-sections=true`, {
            method: 'GET',
            headers: { 'api-key': secrets.apikey }
        });
        data = await response.json();
        data.data.forEach(b => {
            let chapters = [];
            b.chapters.forEach(c => { chapters.push({ id: c.id, number: c.number }) });
            books.push({
                id: b.id,
                name: b.name,
                chapters
            });
        })
    } catch (ex) {
        console.log('Error fetching Books!', ex);
    } finally {
        setBooks(books);
    }
}

export async function fetchChapter(bibleId, chapterId, setChapter) {
    const url =
        `https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${chapterId}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'api-key': secrets.apikey }
    });
    const data = await response.json();
    setChapter({ content: data.data.content, copyright: data.data.copyright });
}