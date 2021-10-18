// Import events module
var events = require("events");

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event hanfler as follows
var connectHandler = function connected() {
    console.log("connection succesfull.");

    // Fire the data_recieved event
    eventEmitter.emit("data_received");
};

// Bind the connection event with the handler
eventEmitter.on("connection", connectHandler);

// Bind the data_received event with the handler
eventEmitter.on("data received", function() {
    console.log("data received successful.");
});

// Fire the connection event
eventEmitter.on("connection");

console.log("Program Ended.");