
// use the message logging module and the event emitter
import { logMessage } from './logmessage';
import eventEmitter from './event';
// Log a message
logMessage("This is a test message");
// Emit an event to notify that a message has been logged
eventEmitter.emit('messagelogged');
// Log a message to indicate that the server has started
console.log("Server is running and ready to log messages.");
