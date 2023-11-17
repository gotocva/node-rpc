const WebSocket = require('rpc-websockets').Client;

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', async () => {
  try {
    const resultAdd = await ws.call('add', [2, 3, 5, 10]);
    console.log('Result of add:', resultAdd);

    const resultSubtract = await ws.call('subtract', [10, 5]);
    console.log('Result of subtract:', resultSubtract);

    ws.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
});

ws.on('close', () => {
  console.log('Connection closed');
});
