import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        publishingCompany: {type: String, required: true},
        numberPages: {type: Number}
    }
);

const Livro = mongoose.model('livros', livroSchema);

export default Livro;
