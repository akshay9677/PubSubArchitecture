const subscriber1 = require("./subscriber");
const subscriber2 = require("./subscriber2");

const subscriber = function (event, eventName) {
  this.subscriber1 = subscriber1.subs(event, eventName);
  this.subscriber2 = subscriber2.subs2(event, eventName);
};
module.exports = subscriber;
