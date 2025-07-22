let destination = "hi this is message"

export function logMessage(message: string) {
  console.log(message);
}
module.exports.logMessage = logMessage;
module.exports.destination = destination;


console.log("Module loaded successfully");

