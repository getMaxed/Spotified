const express = require('express');
const dotenv = require('dotenv');
const { Model } = require('objection');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const Knex = require('knex');
const KnexSessionStore = require('connect-session-knex')(session);
const knexConfig = require('./knexfile');
const registerApi = require('./routes');

dotenv.config();
Model.knex(Knex(knexConfig));

const sessionStore = new KnexSessionStore({ knex: Knex(knexConfig) });

const app = express()
    .use(cors({ credentials: true, origin: 'http://localhost:3000' }))
    .use(cookieParser())
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(logger('dev'))
    .use(
        session({
            secret: process.env.SESSION_SECRET,
            key: process.env.SESSION_KEY,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000033
            },
            store: sessionStore
        })
    );

registerApi(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on ${PORT}`));

process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
