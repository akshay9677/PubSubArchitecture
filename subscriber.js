const subscriber1 = {
  subs: function (events, eventName) {
    events.on(eventName, (t) => {
      console.log("Subscriber 1 : " + t);
      this.arr = t;
    });
  },
};

module.exports = subscriber1;
