const express = require('express');
const loaders = require('./loaders');
const config = require('../config');
const socket = require('../socket');

const startServer = async () => {
  const app = express();

  await loaders(app, config);

  const { server, io } = await socket.init(app);
  app.set('socketio', io);

  server.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`server is running on localhost:${config.port}`);
  });
};

startServer();
