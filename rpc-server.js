const WebSocket = require('rpc-websockets').Server;

const server = new WebSocket({
  port: 3000,
  host: 'localhost',
});

server.register('add', (params) => {
  const result = params.reduce((a, b) => a + b, 0);
  return result;
});

server.register('subtract', (params) => {
  if (params.length !== 2) {
    throw new Error('Subtraction requires two parameters');
  }
  return params[0] - params[1];
});

console.log('RPC Server is running on ws://localhost:3000');
