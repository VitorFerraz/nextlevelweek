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
import {celebrate, Joi} from 'celebrate'
import multer from 'multer'
import multerConfig from './config/multer'
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
// index = list, show = get one item, create, update, delete

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points',upload.single('image'), celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required()
    })
}),pointsController.create)

routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)


export default routes;