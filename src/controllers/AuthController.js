const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.register = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    models.users.create({
        "email": email,
        "password": passwordHash
    })
        .then(result => {
            console.log(result);

            res.status(201).json({
                message: 'Register Success',
                data: result
            });
        })
        .catch(err => next(err));


}

exports.login = async(req, res, next) => {
    models.users.findOne({
        where: {
            email: req.body.email
        }
    })
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
        const checkLogin = bcrypt.compareSync(req.body.password, user.password);
        if (checkLogin) {
            const token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET);
            res.status(200).json({
                message: 'Success Sign In',
                token: token
            })
        } else {
            res.status(401).json({
                message: "Failed Sign in"
            })
        }
    })
    .catch(err => {
        next(err);
    })
}
