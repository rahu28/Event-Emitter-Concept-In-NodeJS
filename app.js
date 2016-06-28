var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", function () {
    console.log("I am your first greeting");
});

emtr.on("greet", function () {
    console.log("I am your second greeting");
});

console.log("Lets see the greetings");
emtr.emit("greet");