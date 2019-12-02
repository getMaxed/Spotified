const asyncErrorHandler = require('../middleware/errorAsync');

exports.logIn = asyncErrorHandler(async (req, res, next) => {
    console.log(req.body);
    console.log(req.cookies);
});

exports.signUp = asyncErrorHandler(async (req, res, next) => {
    console.log(req.body);
    console.log(req.cookies);
});
