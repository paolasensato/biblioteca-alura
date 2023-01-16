import Autor from '../models/Autor.js';

class AutorController {

    static getAutores = (req, res) => {
        Autor.find((err, Autor) => {
            res.status(200).json(Autor);
        }) 
    }
    
    static findAutorById = (req, res) => {
        const { params } = req;
        const { id } = params

        Autor.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({
                    message: `${err.message} - Id não identificado`
                });
            } else {
                res.status(200).send(autores);
            }
        }) 
    }

    static postAutor = (req, res) => {
        let autor = new Autor(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha ao cadastrar autor.`
                });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    } 

    static putAutor = (req, res) => {
        const { body, params } = req;
        const { id } = params;

        Autor.findByIdAndUpdate(id, {$set: body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        });
    }

    static deleteAutor = (req, res) => {
        const { params } = req;
        const { id } = params;

        Autor.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: 'Autor removido com sucesso'
                });
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }
}

export default AutorController;