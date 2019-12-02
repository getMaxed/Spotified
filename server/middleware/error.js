const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    console.log(err.stack);
    console.log(err.message);

    res.status(error.statusCode || 500).json({
        success: false,
        error: (error.statusCode && error.message) || 'Server Error'
    });
};

module.exports = errorHandler;
