const obj = require("../subscriber2");
const EventEmitter = require("events");
const events = new EventEmitter();

test("Test Cases for Subscriber 2", () => {
  const eventName = "test";
  obj.subs2(events, eventName);
  events.emit(eventName, "value");
  expect(obj.arr).toBe("value");
});
