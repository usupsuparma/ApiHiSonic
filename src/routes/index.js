const router = require('express').Router();
const userRoutes = require('./user');
const auth = require('../middleware/auth');
const authRoutes = require('./auth');

// not use middleware
router.use('/auth', authRoutes);

// use middleware
router.use('/user', auth.isAuth, userRoutes);

module.exports = router;