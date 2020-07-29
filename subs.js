const EventEmitter = require("events");
const events = new EventEmitter();

const obj = {
  subs: function (events, eventName) {
    events.on(eventName, (t) => {
      console.log("Subscriber 1 : " + t);
      this.arr = t;
    });
  },
};

module.exports = obj;
