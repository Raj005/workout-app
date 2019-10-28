const sensorService = require('../../../services/sensor');
const sensors = require('../../mocks/sensors');
const users = require('../../mocks/users');
const workouts = require('../../mocks/workouts');

describe('testing sensor service', () => {
  test('should fetch all the sensors', () => {
    const allSensors = sensorService.getAllSensors();
    expect(allSensors.length).toEqual(sensors.length);
  });
  test('should fetch sensors for users', () => {
    const usersNotOwner = users.slice(0, 1);
    const allSensors = sensorService.getSensorsForUsers(usersNotOwner);
    const { owner_id } = allSensors[0];
    expect(owner_id).toEqual(0);
  });

  test('should fetch sensors for users, if sensors are user property', () => {
    const usersOwner = [5, 7];
    const allSensors = sensorService.getSensorsForUsers(usersOwner);
    const sensorsWithoutOwners = allSensors.filter(sensor => !sensor.owner_id);
    expect(sensorsWithoutOwners.length).toEqual(0);
  });

  test('should fetch next available sensor for a user', () => {
    const sensors = sensorService.getSensorsForUsers(users.slice(0, 1));
    expect(sensors.length).toEqual(1);
  });

  test('should mark a sensor to be non-allocatable if it is broken', () => {
    const sensorToBeMarkedBroken = sensors.slice(0, 1).map(sensor => sensor.id);
    const brokenSensors = sensorService.markSensorsUnAllocatable(
      sensorToBeMarkedBroken
    );
    expect(brokenSensors[0].is_allocatable).toEqual(false);
  });

  test('should mark a sensor in use', () => {
    const sensorToBeMarkedInUse = sensors.slice(0, 1).map(sensor => sensor.id);
    const usedSensors = sensorService.markSensorsInUse(sensorToBeMarkedInUse);
    expect(usedSensors[0].in_use).toEqual(true);
  });

  test('should test if sensor is broken', () => {
    const sensorsToTest = sensors.slice(1, 2);
    const result = sensorService.isSensorBroken(sensorsToTest[0].id);
    expect(result).toEqual(false);
  });
});
