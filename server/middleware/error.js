const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    console.log(err.message);

    res.status(500).json({
        success: false,
        error: 'something went wrong'
    });
};

module.exports = errorHandler;
