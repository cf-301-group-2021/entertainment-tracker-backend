'use strict';

const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
	showTitle: {type:'String', required:true},
	showDesc: {type:'String', required:true},
	showNextEpisodeDate: {type:'string'},
	// showNetwork: 
});

module.exports = mongoose.model('item', ShowSchema);
