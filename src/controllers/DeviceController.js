const models = require("../models");
const Models = require("../models");

module.exports = {
  addNewDevice: (req, res, next) => {
    console.log(req.headers);
    console.log(req.headers.api_token);
    let apiToken = req.headers.api_token;

    const suhu = req.body.suhu;
    const kelembaban = req.body.kelembaban;
    console.log(suhu);
    console.log(kelembaban);
    models.humiditys
      .create({
        user_id: 12,
        schedule_id: 12,
        humidity: kelembaban,
        temperature: suhu,
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
    // res.status(200).json({
    //   status: true,
    //   message: "testing",
    //   data: {
    //     suhu: suhu,
    //     humidity: kelembaban,
    //   },
    // });
  },
  deviceStatus: (req, res, next) => {
    console.log(req.headers);
    console.log(req.headers.api_token);
    let apiToken = req.headers.api_token;
    Models.devices
      .findOne({
        where: {
          device_token_key: apiToken,
        },
      })
      .then((device) => {
        res.status(200).json({
          status: true,
          message: "get Detail user",
          data: device.device_status,
        });
      })
      .catch((err) => {
        next(err);
      });
  },
};
