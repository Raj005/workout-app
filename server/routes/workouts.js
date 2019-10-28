const express = require('express');
const router = express.Router();
const services = require('../../services');
const { workoutAllocationsValidator } = require('../middlewares');
const { workoutsRouteHandlers } = require('./routeHandlers');

router.get('/', (req, res) => {});

router.get('/:id', (req, res) => {});

router.get(
  '/:id/allocations',
  workoutsRouteHandlers.getAllocationsHandler(services)
);

router.post(
  '/:id/allocations',
  workoutAllocationsValidator,
  workoutsRouteHandlers.postAllocationsHandler(services)
);

module.exports = router;
