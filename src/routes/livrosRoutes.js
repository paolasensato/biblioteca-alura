import express  from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.getLivros)
    .get("/livros/:id", LivroController.findLivroById)
    .post("/livros", LivroController.postLivro)
    .put("/livros/:id", LivroController.putLivro)
    .delete("/livros/:id", LivroController.deleteLivro);

export default router;