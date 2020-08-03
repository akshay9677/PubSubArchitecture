const obj = require("../subscriber");
const EventEmitter = require("events");
const events = new EventEmitter();

test("Test cases for Subscriber 1", () => {
  const eventName = "test";
  obj.subs(events, eventName);
  var map = new Map([[1, "value"]]);
  events.emit(eventName, map);
  expect(obj.arr[0]).toBe("value");
});
