const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.218.148',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on('connect', () => {
    // In the call back printing a message for the player to see
    console.log("Successfully connected to game server");
    //writing data to server upon connection  
    conn.write('Name: NM');
    //conn.write('Move: up');
    //setInterval(() => conn.write("Move: Left"), 50);
  })

  return conn;
};

console.log("Connecting ...");

module.exports = connect;
