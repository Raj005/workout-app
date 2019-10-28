const { sensorModel } = require('../../models');
const service = require('./service');
const serviceMethods = service(sensorModel);

module.exports = {
  getAllSensors: () => {
    return serviceMethods.getSensors();
  },

  getSensorsForUsers: userIds => {
    const sensorsWithUserAsOwner = [];
    userIds.forEach(userId => {
      const sensor = serviceMethods.getSensorByUserId(userId);
      if (sensor) {
        sensorsWithUserAsOwner.push(sensor);
      }
    });
    const count = userIds.length - sensorsWithUserAsOwner.length;
    const sensorsForRemainingUsers = serviceMethods.getAvailableSensors(count);

    return [...sensorsWithUserAsOwner, ...sensorsForRemainingUsers];
  },

  markSensorsUnAllocatable: sensorIds => {
    return sensorIds.map(sensorId => {
      const sensorToUpdate = serviceMethods.getSensorById(sensorId);
      sensorToUpdate.is_allocatable = false;
      serviceMethods.updateSensor(sensorId, sensorToUpdate);
      return sensorToUpdate;
    });
  },

  markSensorsInUse: sensorIds => {
    return sensorIds.map(sensorId => {
      const sensorToUpdate = serviceMethods.getSensorById(sensorId);
      sensorToUpdate.in_use = true;
      serviceMethods.updateSensor(sensorId, sensorToUpdate);
      return sensorToUpdate;
    });
  },

  isSensorBroken: sensorId => {
    const { is_allocatable } = serviceMethods.getSensorById(sensorId);
    return !is_allocatable;
  }
};
