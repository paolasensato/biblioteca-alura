import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: String, required: true},
        publishingCompany: {type: String, required: true},
        numberPages: {type: Number}
    }
);

const Livro = mongoose.model('livros', livroSchema);

export default Livro;
