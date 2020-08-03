const obj = require("../subscriber2");
const EventEmitter = require("events");
const events = new EventEmitter();

test("Test Cases for Subscriber 2", () => {
  const eventName = "test";
  obj.subs2(events, eventName);
  var map = new Map([[1, "value"]]);
  events.emit(eventName, map);
  expect(obj.arr[0]).toBe("value");
});
