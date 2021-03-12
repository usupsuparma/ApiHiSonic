const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/DeviceController");
const auth = require("../middleware/device");

router.post("/add", deviceController.addNewDevice);
router.post("/humidity", deviceController.addNewDevice);
router.get("/device-status", auth.isDevice, deviceController.deviceStatus);

module.exports = router;
