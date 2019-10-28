const { workoutModel } = require('../../models');
const service = require('./service');
const serviceMethods = service(workoutModel);

module.exports = {
  updateWorkoutAllocations: (id, allocations) => {
    const workout = serviceMethods.getWorkoutById(id);
    workout.allocations = allocations;
    return serviceMethods.updateWorkout(id, workout);
  },

  getWorkoutAllocations: id => {
    const workout = serviceMethods.getWorkoutById(id);
    return workout.allocations;
  }
};
