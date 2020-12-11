const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/UserController');
router.get('/users', userController.getUsers);
router.get('/user', userController.getUser);

module.exports = router;