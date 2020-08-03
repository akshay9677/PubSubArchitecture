const subscriber1 = {
  subs: function (events, eventName) {
    events.on(eventName, (t) => {
      var a = [];
      for (let i = 1; i <= t.size; i++) {
        a.push(t.get(i));
      }
      this.arr = a;
      console.log("Subscriber 1 : " + a);
    });
  },
};

module.exports = subscriber1;
