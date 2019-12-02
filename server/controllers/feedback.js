const Feedback = require('../models/Feedback');
const asyncErrorHandler = require('../middleware/errorAsync');

exports.postFeedback = asyncErrorHandler(async (req, res, next) => {
    const { type, value } = req.body;
    console.log(req.cookies);

    if (!type || !value) {
        return res.status(400).json({
            success: false,
            error: 'No type and/or feedback receieved'
        });
    }

    const result = await Feedback.query().insert({
        [type]: value
    });

    res.cookie('rltv_c', Math.random(), {
        expires: new Date(Date.now() + 9000000),
        httpOnly: true
    });

    if (result.id) {
        res.status(200).json({ success: true });
    } else {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
});
