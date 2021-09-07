'use strict';

const ItemModel = require('./item-model.js');
const Data = { };

Data.getUserLists = async(req,res,errorHandler) => {
	try {

	} catch(error) { 
		console.error(error);
		errorHandler(error); 
	}
}

Data.createUserLists = async(req,res,errorHandler) => {
	try {

	} catch(error) { 
		console.error(error);
		errorHandler(error); 
	}
}

Data.updateUserLists = async(req,res,errorHandler) => {
	try {

	} catch(error) { 
		console.error(error);
		errorHandler(error); 
	}
}

// Data.addAnItem = async(req,res,next) => {
// 	try {
// 		const data = req.body;
// 		const item = new ItemModel(data);
// 		await item.save();
// 		res.status(200).json(item);
// 	} catch(e) { next(e.message); }
// 	}

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
