const router = require('express').Router();
const { getGenresWithArtists } = require('../controllers/genres');

router.get('/', getGenresWithArtists);

module.exports = router;
