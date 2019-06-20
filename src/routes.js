const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("Ola mundo direto de routes");
})

module.exports = routes;