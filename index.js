const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ola');
});

app.listen(3000);