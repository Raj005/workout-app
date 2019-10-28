class WorkoutService {
  constructor(workoutModel) {
    this.model = workoutModel;
  }

  getWorkouts() {
    return this.model.getAll();
  }

  getWorkoutById(id) {
    return this.model.getById(id);
  }

  updateWorkout(id, data) {
    return this.model.update(id, data);
  }

  createWorkout(metadata) {
    return this.model.create(metadata);
  }

  deleteWorkout(id) {
    return this.model.delete(id);
  }
}

module.exports = WorkoutService;
