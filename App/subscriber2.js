const subscriber2 = {
  subs2: function (events, eventName) {
    events.on(eventName, (t) => {
      var a = [];
      for (let i = 1; i <= t.size; i++) {
        a.push(t.get(i));
      }
      this.arr = a;
      console.log("Subscriber 2 : " + a);
    });
  },
};

module.exports = subscriber2;
