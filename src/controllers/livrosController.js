import Livro from "../models/Livro.js";

class LivroController {

    static getLivros = (req, res) => {
        Livro.find((err, Livro) => {
            res.status(200).json(Livro);
        })  
    }

}

export default LivroController;