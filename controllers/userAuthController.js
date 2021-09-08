const axios = require("axios");
const HttpStatusCode = require("../common/httpStatusCodes");

async function loginUser(req, res) {
  try {
    console.log("Logging in user...");
    console.log(req.body.data);
    console.log(req.body.data.email, req.body.data.password);
    res
      .status(HttpStatusCode.OK)
      .send({
        email: req.body.data.email,
        password: req.body.data.password,
      });
  } catch (error) {
    console.error(error);
    res.status(HttpStatusCode.InternalServerError);
  }
};

async function logoutUser(req, res) {
  try {

  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  loginUser,
  logoutUser,
};
