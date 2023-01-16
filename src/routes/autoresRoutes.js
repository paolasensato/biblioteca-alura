import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router 
    .get("/autores", AutorController.getAutores)
    .get("/autores/:id", AutorController.findAutorById)
    .post("/autores", AutorController.postAutor)
    .put("/autores/:id", AutorController.putAutor)
    .delete("/autores/:id", AutorController.deleteAutor);

export default router;