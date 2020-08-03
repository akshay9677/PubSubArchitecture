const express = require("express");
const bodyParser = require("body-parser");
const EventEmitter = require("events");
const events = new EventEmitter();

const subscriber = require("./subscriberFactory");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser());
app.use(express.static("files"));

var map = new Map();
const eventName = "clicked";

app.get("/", (req, res) => {
  res.render("index", { name: [] });
});

//Subscriber

const subscribers = new subscriber(events, eventName);

app.post("/", (req, res) => {
  var valueToAdd = req.body.name;
  map.set(map.size + 1, valueToAdd);
  //Publisher
  events.emit("clicked", map);
  module.exports = events;
  res.render("index", { name: map });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
