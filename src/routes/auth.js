const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/AuthController");

router.post("/register", authController.register);
router.post(
  "/login",
  [
    body("email")
      .isLength({ min: 2 })
      .withMessage("Input Email minimum 5 character"),
    body("password")
      .isLength({ min: 2 })
      .withMessage("Input password minimum 5 character"),
  ],
  authController.login
);

module.exports = router;
