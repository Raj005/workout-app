module.exports = services => {
  return (req, res) => {
    try {
      const socket = req.app.get('socketio');
      const participants = req.body.participants;
      const workoutId = parseInt(req.params.id);
      const sensorsInUse = [];
      const participantsWithoutSensor = [];
      const newAllocationsWithSensors = [];

      const existingAllocationsForWorkout = services.workoutService.getWorkoutAllocations(
        workoutId
      );

      const existingAllocationsWithNonBrokenSensors = existingAllocationsForWorkout.filter(
        allocation =>
          !services.sensorService.isSensorBroken(allocation.sensor_id)
      );

      const existingAllocatedUsers = existingAllocationsWithNonBrokenSensors.map(
        allocation => allocation.user_id
      );

      const nonAllocatedUsers = participants.filter(
        participant => !existingAllocatedUsers.includes(participant)
      );

      const sensors = services.sensorService.getSensorsForUsers(
        nonAllocatedUsers
      );

      const allocations = services.allocationService.createAllocations(
        nonAllocatedUsers,
        sensors
      );

      if (!allocations.length)
        participantsWithoutSensor.push(...nonAllocatedUsers);

      allocations.forEach(allocation => {
        if (allocation.sensor_id) {
          sensorsInUse.push(allocation.sensor_id);
          newAllocationsWithSensors.push(allocation);
        } else {
          participantsWithoutSensor.push(allocation.user_id);
        }
      });

      const totalAllocations = [
        ...existingAllocationsWithNonBrokenSensors,
        ...newAllocationsWithSensors
      ];

      services.sensorService.markSensorsInUse(sensorsInUse);

      services.workoutService.updateWorkoutAllocations(
        workoutId,
        totalAllocations
      );

      socket.emit('workout_allocation', {
        workout_id: workoutId,
        allocations: totalAllocations,
        non_allocated_users: participantsWithoutSensor
      });

      res.status(200).json({
        workout_id: workoutId,
        allocations: totalAllocations,
        non_allocated_users: participantsWithoutSensor
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};
