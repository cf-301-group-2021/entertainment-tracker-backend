const axios = require("axios");
const HttpStatusCode = require("../common/httpStatusCodes");
const repository = require("../data/repository");

async function loginUser(req, res) {
  let email;
  let password;
  let userIsAuthenticated;

  try {
    email = req.body.data.email;
    password = req.body.data.password;
    userIsAuthenticated = repository.validateUserAuth(email, password);
  } catch (error) {
    console.error(error);

    res
      .status(HttpStatusCode.CLIENT_ERROR_FORBIDDEN)
      .send("Unable to validate the account.");

    return;
  }

  console.log(`Logging in user ${email}...`);

  try {
    res
      .status(HttpStatusCode.OK)
      .send({
        email: req.body.data.email,
        password: req.body.data.password,
      });
  } catch
    (error) {
    console.error(error);
    res.status(HttpStatusCode.InternalServerError);
  }
}

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
