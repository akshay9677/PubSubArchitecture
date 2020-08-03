const Subscriber = require("../subscriberFactory");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

test("Subscriber factory test", () => {
  const subscriber = new Subscriber(eventEmitter, "event");
  var map = new Map([[1, 21]]);
  eventEmitter.emit("event", map);
  expect(subscriber.subscriber1.arr[0]).toBe(21);
});
