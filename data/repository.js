const ShowModel = require("../models/ShowModel");
const axios = require("axios");
// const Repository = {};
// module.exports = Repository;


async function getUserShows(userId) {
  ShowModel.find({
      email: userId,
    },
  );
}

async function createUserShows(userId, shows) {
  console.log(userId, shows);
  // todo: for only this user
  ShowModel.insertMany(shows);
};

async function updateUserShows(userId, shows) {

};

async function deleteUserShows(userId, shows) {

};

module.exports = {
  getUserShows,
  createUserShows,
  updateUserShows,
  deleteUserShows,
};

/*
Data.getAllItems = async(req, res) => {
	const data = req.body;
	const items = await ItemModel.find({});
	res.status(200).json(items);
}
*/
/*
Data.deleteOne = async(req, res) => {
	const id = req.params.id;
	const items = await ItemModel.deleteOne({_id:id});
	res.status(200).json(items[0]);
}
*/
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
