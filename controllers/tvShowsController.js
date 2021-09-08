const axios = require("axios");
const repository = require("../data/repository");
const HttpStatusCode = require("../common/httpStatusCodes");

async function updateUserShows(request, response) {
  try {

  } catch (error) {
    console.error(error);
  }
};

async function getUserShows(request, response) {
  try {
    const userId = request.params.userId;

    const items = await repository.getUserShows(userId);
    response.status(HttpStatusCode.OK).json(items);
  } catch (error) {
    console.error(error);
    // todo: differentiate server/client errors
    response.status(HttpStatusCode.CLIENT_ERROR_NOT_FOUND);
  }
};

async function createUserShows(request, response) {
  console.log("Creating shows...", request.body);

  try {
    const show = await repository.createUserShows(request.params.userId, request.body);
    response.status(HttpStatusCode.OK).json(show);
  } catch (error) {
    console.error(error);
    // todo: differentiate server/client errors
    response.status(HttpStatusCode.CLIENT_ERROR_NOT_FOUND);
  }
};

async function deleteUserShow(request, response) {
  try {

  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  updateUserShows,
  getUserShows,
  createUserShows,
  deleteUserShow,
};
