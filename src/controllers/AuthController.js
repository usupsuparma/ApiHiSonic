const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

exports.register = (req, res, next) => {
  const name = req.body.name;
  const user_name = req.body.user_name;
  const email = req.body.email;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);
  models.users
    .create({
      name: name,
      user_name: user_name,
      email: email,
      password: passwordHash,
    })
    .then((result) => {
      console.log(result);

      res.status(201).json({
        success: true,
        message: "Register Success",
        data: result,
      });
    })
    .catch((err) => next(err));
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    console.log("err: ", errors);
    const err = new Error("Invalid Value tidak sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    // throw err;
    next(err);
  }

  models.users
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      const checkLogin = bcrypt.compareSync(req.body.password, user.password);
      if (checkLogin) {
        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.SECRET
        );
        res.status(200).json({
          status: true,
          message: "Success Sign In",
          data: {
            token: token,
          },
        });
      } else {
        res.status(401).json({
          status: false,
          message: "Failed Sign in",
          data: null,
        });
      }
    })
    .catch((err) => {
      next(err);
    });
};
