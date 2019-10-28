// instantiate all models, pass collection and export

const allocationsData = require('../data/allocations');
const sensorsData = require('../data/sensors');
const usersData = require('../data/users');
const workoutsData = require('../data/workouts');

const AllocationModel = require('./allocation');
const SensorModel = require('./sensor');
const UserModel = require('./user');
const WorkoutModel = require('./workout');

module.exports = {
  allocationModel: new AllocationModel(allocationsData),
  sensorModel: new SensorModel(sensorsData),
  userModel: new UserModel(usersData),
  workoutModel: new WorkoutModel(workoutsData)
};
