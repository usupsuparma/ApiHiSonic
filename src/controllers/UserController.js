const Models = require("../models");
const Op = require("sequelize").Op;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  getUsers: (req, res, next) => {
    Models.users
      .findAll({})
      .then((users) => {
        console.log(users);
        res.status(200).json({
          status: true,
          message: "all users",
          data: users,
        });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  getUser: (req, res, next) => {
    const user = req.user;
    const id = user.id;
    Models.users
      .findOne({
        where: {
          id: id,
        },
      })
      .then((user) => {
        res.status(200).json({
          status: true,
          message: "get Detail user",
          data: user,
        });
      });
  },
  createUser: (req, res) => {
    return req.body;
    Models.users
      .create(req.body)
      .then((user) => {
        res.status(201).json({
          message: `Success Created New User`,
          user,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    let userData;
    Models.users
      .findById(id)
      .then((user) => {
        userData = user;
        return user.destroy();
      })
      .then((user) => {
        res.status(200).json({
          message: `Success Deleted an User`,
          user: userData,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: err.message,
        });
      });
  },
  updateUser: (req, res) => {
    const id = req.params.id;
    Models.users
      .findById(id)
      .then((user) => {
        return user.update(req.body);
      })
      .then((user) => {
        res.status(200).json({
          message: `Success Updated an User`,
          user,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: err.message,
        });
      });
  },
};
