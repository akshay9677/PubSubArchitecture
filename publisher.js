const express = require("express");
const bodyParser = require("body-parser");
const EventEmitter = require("events");
const events = new EventEmitter();

const obj = require("./subs");
const obj2 = require("./subs2");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser());
app.use(express.static("files"));

app.get("/", (req, res) => {
  res.render("index", { name: [] });
});
var t = [];
const eventName = "clicked";

//Subscribers Functions
(function () {
  obj.subs(events, eventName);
  obj2.subs2(events, eventName);
})();

app.post("/", (req, res) => {
  var r = req.body.name;
  t.push(r);
  //Publisher
  events.emit("clicked", t);
  module.exports = events;
  res.render("index", { name: t });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
