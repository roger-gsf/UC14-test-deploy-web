const request = require('supertest');
const { app, books } = require('../src/1-books/app');

describe('API de livros', () => {
    beforeEach(() => {
        books.length = 0; // Limpa o array de livros antes de cada teste
    });

    it('deve adicionar um novo livro com sucesso', async () => {
        const newBook = { title: 'The Secret History', publisher: 'Penguin Books', emprestado: false };

        const response = await request(app)
            .post('/books')
            .send(newBook)
            .expect(201)
            .expect('Content-Type', /json/);

        expect(response.body).toMatchObject(newBook);
        expect(response.body).toHaveProperty('id', 1);
        expect(books).toHaveLength(1);
    });

    it('deve retornar erro ao tentar adicionar livro sem título', async () => {
        const newBook = { publisher: 'Penguin Books' }; // that's wrong because there is no title here

        const response = await request(app)
            .post('/books')
            .send(newBook)
            .expect(400)
            .expect('Content-Type', /json/);

        expect(response.body).toEqual({ error: 'title and publisher are required' });
        expect(books).toHaveLength(0);
    });

    it('deve listar os livros cadastrados', async () => {
        books.push({ id: 1, title: 'The Secret History', publisher: 'Penguin Books' });

        const response = await request(app)
            .get('/books')
            .expect(200)
            .expect('Content-Type', /json/);

        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toMatchObject({ title: 'The Secret History', publisher: 'Penguin Books' });
    });
});
