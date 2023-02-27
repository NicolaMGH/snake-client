const { inputs } = require("./constants");
// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }

  connection.write(inputs[key]);

};


module.exports = setupInput;