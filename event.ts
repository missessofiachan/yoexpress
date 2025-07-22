// event module
// events are signals that something has happened in the application
// our job is to respond to these events
import { EventEmitter } from 'events';  



const eventEmitter = new EventEmitter();


eventEmitter.on('messagelogged', function(arg) {
  console.log("A message was logged" + (arg ? ` with argument: ${arg}` : ''));
});




//exercise 

//emit the word logging data this is my message
eventEmitter.on('loggingdata', function(message) {
    console.log("Logging data event received with message: " + message);
    
});
eventEmitter.emit('loggingdata', "This is my message"); // Emit the logging data event with a message

export default eventEmitter; // Export the event emitter for use in other modules
