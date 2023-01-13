import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:35171106@alura.jxlczqm.mongodb.net/biblioteca-alura")

let db = mongoose.connection;

export default db;