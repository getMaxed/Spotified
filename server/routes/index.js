const errorHandler = require('../middleware/error');
const genres = require('./genres');

module.exports = app => {
    app.use('/api/v1/genres', genres).use(errorHandler);
};
