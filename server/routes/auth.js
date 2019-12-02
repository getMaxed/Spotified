const router = require('express').Router();
const { logIn, signUp } = require('../controllers/auth');

router.post('/login', logIn);
router.post('/signup', signUp);

module.exports = router;
