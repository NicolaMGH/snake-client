const IP = '192.168.218.148';
const PORT = 50541;
const MOVE_UP_KEY = 'w';
const MOVE_DOWN_KEY = 's';
const MOVE_LEFT_KEY = 'a';
const MOVE_RIGHT_KEY = 'd';
const inputs = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
  x: 'Say: Im going to beat you',
  c: 'Say: Youre going to lose!'
}

module.exports = {
  IP,
  PORT,
  inputs
};