import Livro from "../models/Livro.js";

class LivroController {

    static getLivros = (req, res) => {
        Livro.find((err, Livro) => {
            res.status(200).json(Livro);
        })  
    }

    static findLivroById = (req, res) => {
        const { params } = req;
        const { id } = params

        Livro.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({
                    message: `${err.message} - Id não identificado`
                });
            } else {
                res.status(200).send(livros);
            }
        }) 
    }

    static postLivro = (req, res) => {
        let livro = new Livro(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha ao cadastrar livro.`
                });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    } 

    static putLivro = (req, res) => {
        const { body, params } = req;
        const { id } = params;

        Livro.findByIdAndUpdate(id, {$set: body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        });
    }

    static deleteLivro = (req, res) => {
        const { params } = req;
        const { id } = params;

        Livro.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: 'Livro removido com sucesso'
                });
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }

}

export default LivroController;
