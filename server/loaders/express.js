const express = require('express');
const { workoutsRoute, sensorsRoute, usersRoute } = require('../routes');

module.exports = (app, config) => {
  app.use(express.json());
  app.use('/workouts', workoutsRoute);
  app.use('/sensors', sensorsRoute);
  app.use('/users', usersRoute);
};
