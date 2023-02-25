const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.218.148',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");

module.exports = connect;
