const axios = require("axios");
const HttpStatusCode = require("../common/httpStatusCodes");
const repository = require("../data/repository");

async function loginUser(request, response) {
  const email = request.body.data.email;
  const password = request.body.data.password;
  const userIsAuthenticated = validateAuth(email, password);

  if (!userIsAuthenticated) {
    console.log(`Creating new user ${email}`);
    repository.createNewUser(email, password);
  }

  console.log(`Logging in user ${email}`);

  repository.authorizeUser(email);

  try {
    response.status(HttpStatusCode.OK).send({ email });
  } catch (error) {
    console.error(error);
    response.status(HttpStatusCode.InternalServerError);
  }
}

async function logoutUser(req, res) {
  try {

  } catch (error) {
    console.error(error);
  }
};

function validateAuth(email, password) {
  try {
    return repository.validateCredentials(email, password);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  loginUser,
  logoutUser,
};
