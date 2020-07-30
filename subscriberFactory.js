const obj = require("./subscriber");
const obj2 = require("./subscriber2");

const Subscriber = function (event, eventName) {
  this.obj = obj.subs(event, eventName);
  this.obj2 = obj2.subs2(event, eventName);
};
module.exports = Subscriber;
