const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/UserController');
router.use('/users', auth.isAuth, userController.getUsers);

module.exports = router;