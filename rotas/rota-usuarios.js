import { Router } from "express";
import { criarUsuario, listarUsuarios } from "../controller/usuarios-controller.js";
import { verificarAutorizacao } from '../auth.js';


const router = Router();

router.use((req, res, next) => {
    console.log("Chamando API");
    next();
});

router.get('/', (req, res) => {
    listarUsuarios(req, res);
    console.log('lista de usuarios exibida');
});

router.post('/', verificarAutorizacao, (req, res) => {
    criarUsuario(req, res);
    console.log('usuario criado com sucesso');
});

export default router;