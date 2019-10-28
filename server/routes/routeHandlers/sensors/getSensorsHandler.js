module.exports = services => {
  return (req, res) => {
    try {
      const sensors = services.sensorService.getAllSensors();
      res.status(200).json({ sensors });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};
