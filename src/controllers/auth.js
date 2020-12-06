exports.register = (req, res, next) => {
    const email = req.body.email;
    console.log('register')


    const result = {
        message: 'Register Success',
        data: {
            email: email
        }
    }

    res.status(201).json(result);
}

exports.login = (req, res, next) => {

}
