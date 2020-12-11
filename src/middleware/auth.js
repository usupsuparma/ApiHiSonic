const jwt = require('jsonwebtoken');

module.exports = {
  isAuth: (req,res,next) => {
    try {
      const token = req.headers.token;
      if(!token) {
        return res.status(403).json({
          status: false,
          message: 'Token not Provide',
          data: null
        })
      }
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    } catch(err) {
      res.status(401).json({
        status: false,
        message: 'Token invalid',
        data: null
      });
    }
  },
  isAuthorized: (req,res,next) => {
    if (req.user.role == 'admin') {
      next();
    } else {
      res.status(401).json({
        message: 'User Not Authorized'
      });
    }
  }
};