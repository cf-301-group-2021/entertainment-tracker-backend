"use strict";

const ShowModel = require('./models/ShowModel');
const Data = {};

// Data.addAnItem = async(req,res,next) => {
// 	try {
// 		const data = req.body;
// 		const item = new ItemModel(data);
// 		await item.save();
// 		res.status(200).json(item);
// 	} catch(e) { next(e.message); }
// 	}

// Data.getOneItem = async(req, res) => {
// 	const id = req.params.id;
// 	const items = await ItemModel.find({_id:id});
// 	res.status(200).json(items[0]);
// }

Data.searchTvShows = async (req, res, errorHandler) => {
  try {

  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};

/**
 * @param req Request object
 * @param res Response object
 * @param {function(object)} errorHandler
 * @returns {Promise<void>}
 */
Data.getUserShows = async (req, res, errorHandler) => {
  try {
    const data = req.params.userId;
    const items = await ShowModel.find({

      },
    );
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};

Data.createUserShows = async (req, res, errorHandler) => {
  try {

  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};

Data.updateUserShows = async (req, res, errorHandler) => {
  try {

  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};

Data.deleteUserShow = async (req, res, errorHandler) => {
  try {

  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};

Data.getShowUpdates = async (req, res, errorHandler) => {
  try {

  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};

Data.loginUser = async (req, res, errorHandler) => {
  try {

  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};

Data.logoutUser = async (req, res, errorHandler) => {
  try {

  } catch (error) {
    console.error(error);
    errorHandler(error);
  }
};


// Data.getAllItems = async(req, res) => {
// 	const data = req.body;
// 	const items = await ItemModel.find({});
// 	res.status(200).json(items);
// }

// Data.getOneItem = async(req, res) => {
// 	const id = req.params.id;
// 	const items = await ItemModel.find({_id:id});
// 	res.status(200).json(items[0]);
// }

// Data.deleteOne = async(req, res) => {
// 	const id = req.params.id;
// 	const items = await ItemModel.deleteOne({_id:id});
// 	res.status(200).json(items[0]);
// }

module.exports = Data;
