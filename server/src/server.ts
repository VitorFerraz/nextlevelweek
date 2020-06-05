import express, { request } from "express";
import routes from './routes'

const app = express();
app.use(express.json());
app.use(routes);


// SELECT * FROM users WHERE name = 'Vitor'
// knex('users').where('name', 'Vitor').select('*')

//const users = ['vitor', 'gisele']

// app.post('/users', (request, response) => { 
//     const data = request.body
//     const user = { 
//         name: 'Vitor',
//         email: 'vitor@teste.com'
//     }
//     response.json(data)
// })
// app.get('/users', (request, response) => { 
//     const search = String(request.query.search)
//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users

//     response.json(filteredUsers)
// })

// app.get('/users/:id', (request, response) => { 
//     const id = Number(request.params.id) 
//     const user = users[id]
//     response.json(user)

// })

app.listen(3333);