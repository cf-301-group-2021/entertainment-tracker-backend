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

app.get('/items/:userId', Data.getUserLists);
app.post('/items/:userId', Data.createUserLists);
app.put('/items/:userId', Data.updateUserLists);
app.delete('/items/:userId', Data.deleteUserLists);
app.post('/updates', Data.getItemUpdates);
app.post('/login', Data.loginUser);

// app.get('/items', Data.getAllItems);
// app.get('/items/:id', Data.getOneItem);
// app.post('/items', Data.addAnItem);
// app.delete('/items/:id', Data.deleteOne);

app.use('*', (req,res) => {
	res.status(404).send('These are not the droids you are looking for.');
});

app.use( (error,req,res,next) => {
	res.status(500).send(`My Bad ... ${error.message}`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

