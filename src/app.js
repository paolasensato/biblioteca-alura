import express from "express";

const app = express();

app.use(express.json());

const books = [
    {
        "id": 1,
        "title": "Senhor dos Anéis"
    },
    {
        "id": 2,
        "title": "O Hobbit"
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res) => {
    res.status(200).json(books)
})

app.post('/livros', (req, res) => {
    books.push(req.body);
    res.status(201).send('Registrado com sucesso!');
})

export default app;