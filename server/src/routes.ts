// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação no back-end
// DELETE: Deletar uma informação no back-end

// Request Param: Parâmatros que vem na própria rota que identificam um recurso
// Query Param: Parâmatros opcionais que servem para filtrar 
// Request Body: Parâmatros para criação/atualização de informações


import express, { request } from "express";

const routes = express.Router();

routes.get('/', (request, response) => { 
    response.json({message: "Hello world"})
})

export default routes;