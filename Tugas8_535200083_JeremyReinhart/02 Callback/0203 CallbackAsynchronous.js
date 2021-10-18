var fs = require("fs");

fs.readFile("input.txt", function(err, data) {
    if (err) {
        return console.error(err);
        return;
    }
    console.log(data.toString());
});

console.log("Program Ended");