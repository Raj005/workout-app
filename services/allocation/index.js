const { allocationModel } = require('../../models');
const service = require('./service');
const serviceMethods = service(allocationModel);

module.exports = {
  createAllocations: (userIds, sensors) => {
    return sensors.length
      ? userIds.map(userId => {
          const allocation = {
            user_id: userId,
            sensor_id: null,
            sensor_is_user_property: false,
            created_at: new Date(),
            updated_at: new Date()
          };

          if (!sensors.length) {
            return allocation;
          }

          const sensorWithOwner = sensors.find(
            sensor => sensor.owner_id === userId
          );

          if (sensorWithOwner) {
            allocation.sensor_id = sensorWithOwner.id;
            allocation.sensor_is_user_property = true;
            sensors.splice(sensors.indexOf(sensorWithOwner), 1);
          } else {
            const sensor = sensors.pop();
            allocation.sensor_id = sensor.id;
          }
          return serviceMethods.createAllocation(allocation);
        })
      : [];
  }
};
