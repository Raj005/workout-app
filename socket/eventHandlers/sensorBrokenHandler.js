module.exports = (services, socket) => {
  return data => {
    try {
      const { workout_id, user_id } = data;
      const sensors = services.sensorService.getSensorsForUsers([user_id]);
      const newSensor = sensors[0];
      const allocations = services.workoutService.getWorkoutAllocations(
        workout_id
      );

      const newAllocations = allocations.map(allocation => {
        if (allocation.user_id === user_id) {
          allocation.sensor_id = newSensor.sensor_id;
        }
        return allocation;
      });

      services.workoutService.updateWorkoutAllocations(
        workout_id,
        newAllocations
      );
      socket.emit('new_sensor_allocated', { sensor: newSensor });
    } catch (e) {}
  };
};
