const express = require("express");
const bodyParser = require("body-parser");
const EventEmitter = require("events");
const events = new EventEmitter();

const subscriber = require("./subscriberFactory");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser());
app.use(express.static("files"));

var listOfDatat = [];
const eventName = "clicked";

app.get("/", (req, res) => {
  res.render("index", { name: [] });
});

//Subscriber

const subscribers = new subscriber(events, eventName);

app.post("/", (req, res) => {
  var valueToAdd = req.body.name;
  listOfDatat.push(valueToAdd);
  //Publisher
  events.emit("clicked", listOfDatat);
  module.exports = events;
  res.render("index", { name: listOfDatat });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
