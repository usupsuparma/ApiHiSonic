const router = require('express').Router();
const user = require('./user');
const auth = require('../middleware/auth');
const authRoutes = require('./auth');

router.use('/users',auth.isAuth, user);
router.use('/auth', authRoutes);

module.exports = router;