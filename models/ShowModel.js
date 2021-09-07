/*
{
  "id": 139,
  "url": "https://www.tvmaze.com/shows/139/girls",
  "name": "Girls",
  "type": "Scripted",
  "language": "English",
  "genres": [
    "Drama",
    "Romance"
  ],
  "status": "Ended",
  "runtime": 30,
  "averageRuntime": 30,
  "premiered": "2012-04-15",
  "officialSite": "http://www.hbo.com/girls",
  "schedule": {
    "time": "22:00",
    "days": [
      "Sunday"
    ]
  },
  "rating": {
    "average": 6.6
  },
  "weight": 95,
  "network": {
    "id": 8,
    "name": "HBO",
    "country": {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
    }
  },
  "webChannel": null,
  "dvdCountry": null,
  "externals": {
    "tvrage": 30124,
    "thetvdb": 220411,
    "imdb": "tt1723816"
  },
  "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
  },
  "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
  "updated": 1611310521,
  "_links": {
    "self": {
      "href": "https://api.tvmaze.com/shows/139"
    },
    "previousepisode": {
      "href": "https://api.tvmaze.com/episodes/1079686"
    }
  }
}
 */
"use strict";

const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema({
  showTitle: { type: "String", required: true }, // derived from name
  showDesc: { type: "String", required: true }, // derived from summary
  showStatus: { type: "String", required: true }, // derived from status
  showNextEpisodeTime: { type: "String", required: true }, // derived from schedule.time
  showNextEpisodeDayOfWeek: { type: "String[]", required: true }, // derived from schedule.days[]
  showNetwork: { type: "String", required: true }, // derived from network.name
  showImageSmall: { type: "String", required: true }, // derived from image.medium
  showImageLarge: { type: "String", required: true }, // derived from image.original
});

module.exports = mongoose.model("Show", ShowSchema);
