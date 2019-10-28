class SensorService {
  constructor(sensorModel) {
    this.model = sensorModel;
  }

  getSensors() {
    return this.model.getAll();
  }

  getSensorById(id) {
    return this.model.getById(id);
  }

  updateSensor(id, data) {
    return this.model.update(id, data);
  }

  createSensor(metadata) {
    return this.model.create(metadata);
  }

  deleteSensor(id) {
    return this.model.delete(id);
  }
}

module.exports = SensorService;
