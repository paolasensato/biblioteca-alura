import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();

app.use(express.json());    

routes(app);

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