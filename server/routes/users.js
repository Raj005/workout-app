const express = require('express');
const router = express.Router();
const services = require('../../services');
const { usersRouteHandlers } = require('./routeHandlers');

router.get('/', usersRouteHandlers.getUsersHandler(services));

module.exports = router;
