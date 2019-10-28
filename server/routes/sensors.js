const express = require('express');
const router = express.Router();
const services = require('../../services');
const { sensorsRouteHandlers } = require('./routeHandlers');

router.get('/', sensorsRouteHandlers.getSensorsHandler(services));

router.put('/:id/break', sensorsRouteHandlers.breakSensorHandler(services));

module.exports = router;
