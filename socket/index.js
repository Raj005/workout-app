const http = require('http');
const socketIO = require('socket.io');
const services = require('../services');
const Socket = require('./socket');
const { sensorBrokenHandler } = require('./eventHandlers');

module.exports = {
  init: async app => {
    const server = http.Server(app);
    const io = socketIO(server);

    io.on('connection', socket => {
      const socketInstance = new Socket(socket);
      app.set('socket', socketInstance);

      socketInstance.listen(
        'sensor_broken',
        sensorBrokenHandler(services, socketInstance)
      );
    });

    return { server, io };
  }
};
