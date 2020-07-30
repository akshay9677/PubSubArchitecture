const subscriber2 = {
  subs2: function (events, eventName) {
    events.on(eventName, (t) => {
      console.log("Subscriber 2 :" + t);
      this.arr = t;
    });
  },
};

module.exports = subscriber2;
