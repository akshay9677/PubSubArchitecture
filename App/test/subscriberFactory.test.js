const Subscriber = require("../subscriberFactory");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

test("Subscriber factory test", () => {
  const subscriber = new Subscriber(eventEmitter, "event");
  eventEmitter.emit("event", 21);
  expect(subscriber.obj.arr).toBe(21);
});
