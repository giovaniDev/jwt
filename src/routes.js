const express = require('express');
const UserController = require('./controller/UserControler');
const authUser = require('./middlewares/auth');

const routes = express.Router();

routes.post('/createuser', UserController.createUser);
routes.post('/auth', UserController.authUser);

//rotas que precisam de autentificação
routes.use(authUser);
routes.get('/finduser', UserController.findAllUsers);
routes.get('/painel', (req, res) => res.send('Painel HELLO WORLD!'));
routes.get('/finduser/:id', UserController.findUserByID);

module.exports = routes;