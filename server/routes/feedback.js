const router = require('express').Router();
const { postFeedback } = require('../controllers/feedback');

router.post('/', postFeedback);

module.exports = router;
