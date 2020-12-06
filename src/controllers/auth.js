const models = require('../../models');
exports.register = (req, res, next) => {
    const email = req.body.email;
    console.log('register')

    models.users.create({
        "email": email
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

exports.login = (req, res, next) => {

}
