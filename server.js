'use strict';

const express = require('express');
const cors = require('cors');
const Data = require('./data');
const app = express();
const PORT = process.env.PORT || 3001;

console.log(`Connecting with ${PORT}`)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/shows/:userId', Data.getUserShows);
app.post('/shows/:userId', Data.createUserShows);
app.put('/shows/:userId', Data.updateUserShows);
app.delete('/shows/:userId', Data.deleteUserShows);
app.post('/updates', Data.getShowUpdates);
app.post('/login', Data.loginUser);
app.post('/logout', Data.logoutUser);

app.use('*', (req,res) => {
	res.status(404).send('not found');
});

app.use( (error,req,res,next) => {
	res.status(500).send(`server issue....bleep bloop ... ${error.message}`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
