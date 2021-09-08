const axios = require("axios");
const TvMazeEndpointUri = "https://api.tvmaze.com/search/shows?q=";
const HttpStatusCode = require("../common/httpStatusCodes");


async function searchTvShows(request, response) {
  const query = encodeURI(`${TvMazeEndpointUri}${request.params.query}`);

  console.log(query);

  try {
    const responseult = await axios.get(query);
    response.status(HttpStatusCode.OK).send(responseult.data);
  } catch (error) {
    console.error(error);
    // todo: differentiate server/client errors
    response.status(HttpStatusCode.CLIENT_ERROR_NOT_FOUND);
  }
}

module.exports = {
  searchTvShows,
};
