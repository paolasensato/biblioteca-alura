import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        nationality: {type: String}
    },
    {
        versionKey: false
    }
);

const Autor = mongoose.model('autores', autorSchema);

export default Autor;
