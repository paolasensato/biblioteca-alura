import express from "express";
import db from "./config/dbConnect.js";
import Livro from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();

app.use(express.json());    

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res) => {
    Livro.find((err, Livro) => {
        res.status(200).json(Livro);
    })
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

app.delete('/livros/:idLivro', (req, res) => {
    const { params } = req;
    const { idLivro } = params;

    let index = buscaLivro(idLivro);
    books.splice(index, 1);
    res.send(`Livro ${idLivro} foi removido com sucesso.`)
})

function buscaLivro(id) {
    return books.findIndex(livro => livro.id == id)
}

export default app;