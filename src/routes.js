const express = require('express');
const UserController = require('./controller/UserControler');

const routes = express.Router();

routes.post('/createuser', UserController.createUser);

module.exports = routes;