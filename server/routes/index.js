const errorHandler = require('../middleware/error');
const genres = require('./genres');
const feedback = require('./feedback');
const auth = require('./auth');

module.exports = app => {
    app.use('/api/v1/genres', genres).use(errorHandler);
    app.use('/api/v1/feedback', feedback).use(errorHandler);
    app.use('/api/v1/auth', auth).use(errorHandler);
};
