"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// event module
// events are signals that something has happened in the application
// our job is to respond to these events
var events_1 = require("events");
var eventEmitter = new events_1.EventEmitter();
eventEmitter.on('messagelogged', function (arg) {
    console.log("A message was logged" + (arg ? " with argument: ".concat(arg) : ''));
});
//exercise 
//emit the word logging data this is my message
eventEmitter.on('loggingdata', function (message) {
    console.log("Logging data event received with message: " + message);
});
eventEmitter.emit('loggingdata', "This is my message"); // Emit the logging data event with a message
exports.default = eventEmitter; // Export the event emitter for use in other modules
