const ServiceBaseClass = require('./serviceBaseClass');

module.exports = model => {
  const serviceInstance = new ServiceBaseClass(model);
  return {
    getWorkoutById: id => {
      return serviceInstance.getWorkoutById(id);
    },

    getWorkouts: () => {
      return serviceInstance.getWorkouts();
    },

    updateWorkout: (id, data) => {
      return serviceInstance.updateWorkout(id, data);
    }
  };
};
