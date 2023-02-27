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
  if (key === "w") {
    connection.write("Move: up");
    console.log("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
    console.log("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
    console.log("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
    console.log("Move: right");
  }
  
};


module.exports = setupInput;