const express = require('express');
const app = express();

app.use(express.json());

let books = [];

app.post('/books', (req, res) => {
    const book = req.body;
    if (!book.title || !book.publisher) {
        return res.status(400).json({ error: 'Title and publisher are required' });
    }
    book.id = books.length + 1;
    books.push(book);
    res.status(201).json(book);
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.put('/books/:id', (req, res) => {
    const updatedBook = req.body;
    const id = req.params.id;

    if (!updatedBook.title || !updatedBook.publisher) {
        return res.status(400).json({ error: 'Title and publisher are required' });
    }

    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    books[bookIndex] = { ...books[bookIndex], ...updatedBook };

    res.status(200).json(books[bookIndex]);
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    books.splice(bookIndex, 1);

    res.status(200).json({ message: 'Book deleted successfully' });
});

app.post('/loans', (req, res) => {
    const title = req.params.title;
    const bookTitle = books.findIndex((book) => book.title === title);

    if (bookTitle === '') { // GOTTA FIX THIS
        return res.status(404).json({ error: 'Book not found' });
    }

    if (books[bookTitle].loaned) {
        res.status(401).json({ error: 'This book is already loaned' });
    } else {
        books[bookTitle].loaned
        res.status(200).json({ message: 'Book loaned successfully!' })
    }
});

app.post('/returns', (req, res) => {
    const title = req.params.title;
    const bookName = books.findIndex((book) => book.title === title);

    if (bookIndex === '') { // GOTTA FIX THIS
        return res.status(404).json({ error: 'Book not found' });
    }

    if (bookIndex.loaned) {
        bookName = books.findIndex((book) => book.title === title);
    }
});

module.exports = { app, books };
