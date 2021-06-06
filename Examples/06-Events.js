// we require the events class
const EventEmitter = require("events");

// we create a custom event emitter (an instance of the class EventEmitter)
const customEventEmitter = new EventEmitter();
// subscribe to a specific event (the parameters are the name of the event ("response") and the callback that gets executed when the event is emited)
customEventEmitter.on("response", () => {
  console.log(`Data received`);
});
// we emit the event - the response parameter needs to be the same on subscription and on emission
customEventEmitter.emit("response");
