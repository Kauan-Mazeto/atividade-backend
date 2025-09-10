const usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "Pedro", email: "pedro@email.com" }
];

function listarUsuarios(req, res) {
    res.json(usuarios);
}

function criarUsuario(req, res) {
    res.status(201).json({ message: "Rota permitida" });
}

export { listarUsuarios , criarUsuario };