module.exports = services => {
  return (req, res) => {
    try {
      const socket = req.app.get('socketio');
      const sensorId = parseInt(req.params.id);

      const sensors = services.sensorService.markSensorsUnAllocatable([
        sensorId
      ]);

      socket.emit('sensor_broken', { sensor: sensors[0] });

      res.status(200).json({ sensor: sensors[0] });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};
