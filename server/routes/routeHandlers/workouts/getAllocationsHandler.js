module.exports = services => {
  return (req, res) => {
    try {
      const workoutId = parseInt(req.params.id);
      const allocations = services.workoutService.getWorkoutAllocations(
        workoutId
      );
      res.status(200).json({ allocations });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};
