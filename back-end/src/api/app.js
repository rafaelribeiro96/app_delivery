const cors = require('cors');
const express = require('express');
const path = require('path');
const routes = require('../routes');

const app = express();

const imagePath = path.join(__dirname, '..', '..', '..', 'assets', 'public');

app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/images', express.static(imagePath));

app.use(routes);

module.exports = app;
