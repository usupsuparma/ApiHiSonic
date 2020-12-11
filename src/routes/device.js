const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/DeviceController');

router.post('/add', deviceController.addNewDevice);


module.exports = router;