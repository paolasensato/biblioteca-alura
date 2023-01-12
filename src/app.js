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

app.get('/livros/:idLivro', (req, res) => {
    const { params } = req;
    const { idLivro } = params;

    let index = buscaLivro(idLivro);
    res.json(books[index]);
})

app.post('/livros', (req, res) => {
    books.push(req.body);
    res.status(201).send('Registrado com sucesso!');
})

app.put('/livros/:idLivro', (req, res) => {
    const { params, body } = req;
    const { title } = body;
    const { idLivro } = params;

    let index = buscaLivro(idLivro);
    books[index].title = title;
    res.json(books[index]);
})

function buscaLivro(id) {
    return books.findIndex(livro => livro.id == id)
}

export default app;