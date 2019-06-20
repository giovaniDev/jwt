const express = require('express');
const UserController = require('./controller/UserControler');

const routes = express.Router();

routes.post('/createuser', UserController.createUser);
routes.get('/finduser', UserController.findAllUsers);
routes.get('/finduser/:id', UserController.findUserByID);

module.exports = routes;