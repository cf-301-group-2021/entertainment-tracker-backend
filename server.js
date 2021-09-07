"use strict";

const express = require("express");
const cors = require("cors");
const Data = require("./data");
const app = express();
const PORT = process.env.PORT || 80;

console.log(`Connecting with ${PORT}`);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// tv show search
app.get("/search/tv/:q", Data.searchTvShows);

// user's items
app.get("/shows/:userId", Data.getUserShows);
app.post("/shows/:userId", Data.createUserShows);
app.put("/shows/:userId", Data.updateUserShows);
app.delete("/shows/:userId", Data.deleteUserShows);

// login/logout user
app.post("/login", Data.loginUser);
app.post("/logout", Data.logoutUser);

// update trigger
app.post("/updates", Data.getShowUpdates);

app.use("*", (req, res) => {
  res.status(404).send("not found");
});

app.use((error, req, res, next) => {
  res.status(500).send(`server issue....bleep bloop ... ${error.message}`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
