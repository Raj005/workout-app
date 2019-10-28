const ServiceBaseClass = require('./serviceBaseClass');

module.exports = model => {
  const serviceInstance = new ServiceBaseClass(model);
  return {
    getSensorById: id => {
      return serviceInstance.getSensorById(id);
    },

    getSensors: () => {
      return serviceInstance.getSensors();
    },

    getSensorByUserId: userId => {
      return serviceInstance
        .getSensors()
        .find(sensor => sensor.is_allocatable && sensor.owner_id === userId);
    },

    getAvailableSensors: count => {
      return serviceInstance
        .getSensors()
        .filter(
          sensor =>
            sensor.is_allocatable && !sensor.in_use && sensor.owner_id === 0
        )
        .slice(0, count);
    },

    updateSensor: (id, data) => {
      return serviceInstance.updateSensor(id, data);
    }
  };
};
