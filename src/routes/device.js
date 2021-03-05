const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/DeviceController");

router.post("/add", deviceController.addNewDevice);
router.post("/humidity", deviceController.addNewDevice);

module.exports = router;
