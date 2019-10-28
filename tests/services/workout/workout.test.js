const workoutService = require('../../../services/workout');
const sensors = require('../../mocks/sensors');
const users = require('../../mocks/users');
const workouts = require('../../mocks/workouts');

describe('testing workout service', () => {
  test('should fetch all the allocations of a given workout', () => {
    const workout = workouts[0];
    const allocations = workoutService.getWorkoutAllocations(workout.id);
    expect(allocations.length).toEqual(0);
  });

  test('should update allocations of a workout', () => {
    const workout = workouts[0];
    const allocations = [
      {
        user_id: 1,
        sensor_id: 1,
        sensor_is_user_property: false,
        created_at: 'time',
        updated_at: 'time'
      }
    ];
    workoutService.updateWorkoutAllocations(workout.id, allocations);
    const updatedAllocations = workoutService.getWorkoutAllocations(workout.id);
    expect(updatedAllocations.length).toEqual(allocations.length);
  });
});
