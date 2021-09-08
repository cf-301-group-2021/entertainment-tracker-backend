"use strict";

const ShowModel = require("./models/ShowModel");
const axios = require("axios");
const TvMazeApiKey = process.env.TVMAZE_API_KEY;
const TvMazeEndpointUri = "https://api.tvmaze.com/search/shows?q=";
const Data = {};
module.exports = Data;

/*
Data.addAnItem = async(req,res,next) => {
	try {
		const data = req.body;
		const item = new ItemModel(data);
		await item.save();
		res.status(200).json(item);
	} catch(e) { next(e.message); }
	}
*/

/*
Data.getOneItem = async(req, res) => {
	const id = req.params.id;
	const items = await ItemModel.find({_id:id});
	res.status(200).json(items[0]);
}
*/

Data.searchTvShows = async (req, res) => {
  const query = encodeURI(`${TvMazeEndpointUri}${req.params.query}`);
  console.log(query);

  try {
    const result = await axios.get(query);
    res.status(200).send(result.data);
  } catch (error) {
    console.error(error);
    // todo: differentiate server/client errors
    res.status(404);
  }
};

Data.getShowUpdates = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  }
};

Data.loginUser = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  }
};

Data.logoutUser = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  }
};

/**
 * @param req Request object
 * @param res Response object
 * @param {function(object)} errorHandler
 * @returns {Promise<void>}
 */
Data.getUserShows = async (req, res) => {
  try {
    const userId = req.params.userId;

    const items = await ShowModel.find({
        email: userId,
      },
    );
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    // todo: differentiate server/client errors
    res.status(404);
  }
};

Data.createUserShows = async (req, res) => {
  console.log('Creating shows...', req.body.length);

  try {
    const show = await ShowModel.insertMany(req.body);
    res.status(200).json(show);
  } catch (error) {
    console.error(error);
    // todo: differentiate server/client errors
    res.status(404);
  }
};

Data.updateUserShows = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  }
};

Data.deleteUserShow = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  }
};

// Data.getAllItems = async(req, res) => {
// 	const data = req.body;
// 	const items = await ItemModel.find({});
// 	res.status(200).json(items);
// }

// Data.deleteOne = async(req, res) => {
// 	const id = req.params.id;
// 	const items = await ItemModel.deleteOne({_id:id});
// 	res.status(200).json(items[0]);
// }
