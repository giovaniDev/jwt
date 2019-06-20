const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.HOST, { useNewUrlParser: true });

const app = express();

app.use(express.json());
app.use(require('./src/routes'));

app.listen(3000);