const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');
const User = require('../models/User');
const asyncErrorHandler = require('../middleware/errorAsync');
const { ErrorResponse } = require('../utils/http');

exports.logIn = asyncErrorHandler(async (req, res, next) => {});

exports.signUp = asyncErrorHandler(async (req, res, next) => {
    const { username, email, password: p } = req.body;

    if (!username || !email || !p) {
        return next(new ErrorResponse('All fields are required', 400));
    }

    let user;

    user = await User.query().findOne({ username });
    if (user)
        return next(
            new ErrorResponse('User with such username already exists', 400)
        );

    user = await User.query().findOne({ email });
    if (user)
        return next(
            new ErrorResponse('User with such email already exists', 400)
        );

    const id = uuid();
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(p, salt);

    await User.query().insert({
        id,
        username,
        email,
        password
    });

    res.status(200).json({ success: true });
});
