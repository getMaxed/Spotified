const express = require('express');
const dotenv = require('dotenv');
const { Model } = require('objection');
const cors = require('cors');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const registerApi = require('./routes');

dotenv.config();
Model.knex(Knex(knexConfig));

const app = express()
    .use(cors())
    .use(express.urlencoded({ extended: true }))
    .use(express.json());

registerApi(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on ${PORT}`));

process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
