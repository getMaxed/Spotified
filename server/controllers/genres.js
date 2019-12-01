const asyncErrorHandler = require('../middleware/errorAsync');

exports.getGenresWithArtists = asyncErrorHandler(async (req, res, next) => {
    console.log('done');
    res.status(200).json({ success: true, data: 'fuckoff' });
});
