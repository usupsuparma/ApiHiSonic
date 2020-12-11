const router = require('express').Router();
const userRoutes = require('./user');
const auth = require('../middleware/auth');
const authRoutes = require('./auth');
const devices = require('./device');

// not use middleware
router.use('/auth', authRoutes);

// use middleware
router.use('/user', auth.isAuth, userRoutes);
router.use('/device', auth.isAuth, devices);

module.exports = router;