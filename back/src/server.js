const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router)

module.exports = app;