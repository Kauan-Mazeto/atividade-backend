import express from 'express';
import { verificarAutorizacao } from './auth.js';

const app = express();

app.use(express.json());


app.use((req, res, next) => {
    console.log("Chamando API");
    next();
});

const usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "Pedro", email: "pedro@email.com" }
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
    console.log('lista de usuarios exibida');
});

app.post('/usuarios', verificarAutorizacao, (req, res) => {
    res.status(201).json({ message: "Rota permitida" });

    console.log('usuario criado com sucesso');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});