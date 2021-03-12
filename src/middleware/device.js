const Models = require("../models");

module.exports = {
  isDevice: (req, res, next) => {
    try {
      let apiToken = req.headers.api_token;
      console.log(apiToken);
      if (apiToken == undefined || null) {
        res.status(401).json({
          success: false,
          message: "Api Token Not found",
          data: null,
        });
      }
      next();
    } catch (error) {
      res.status(401).json({
        status: false,
        message: "Api Token not provide",
        data: null,
      });
    }
  },
};
