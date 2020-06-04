import express from "express";

const app = express();
app.get('/users', (resquest, response) => { 
    console.log('Listagem de usuários');
    // response.send('Hello world');
    response.json(
        ['vitor', 'gisele']
    )
});
app.listen(3333);