const obj = require("./subscriber");
const EventEmitter = require("events");
const events = new EventEmitter();

test("Test cases for subscriber", () => {
  const eventName = "test";
  obj.subs(events, eventName);
  events.emit(eventName, "value");
  expect(obj.arr).toBe("value");
});
