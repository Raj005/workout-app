const allocationService = require('../../../services/allocation');
const sensors = require('../../mocks/sensors');
const users = require('../../mocks/users');

describe('testing allocation service', () => {
  test('should create allocations for given users when sensors are sufficient', () => {
    const totalSensorsToAllocate = sensors.length;

    const allocations = allocationService.createAllocations(users, sensors);
    const usersWithSensors = allocations.filter(
      allocation => allocation.sensor_id
    );

    expect(usersWithSensors.length).toEqual(totalSensorsToAllocate);
  });

  test('should create allocations for given users when sensors are insufficient', () => {
    const insufficientSensors = sensors.slice(0, 5);
    const totalSensorsToAllocate = insufficientSensors.length;

    const allocations = allocationService.createAllocations(
      users,
      insufficientSensors
    );

    const usersWithSensors = allocations.filter(
      allocation => allocation.sensor_id
    );

    const usersWithoutSensors = allocations.filter(
      allocation => !allocation.sensor_id
    );

    expect(usersWithSensors.length).toEqual(totalSensorsToAllocate);

    expect(usersWithoutSensors.length).toEqual(
      sensors.length - totalSensorsToAllocate
    );
  });
});
