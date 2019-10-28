class SensorModel {
  constructor(sensorCollection) {
    this.collection = sensorCollection;
  }

  getAll() {
    return this.collection;
  }

  getById(id) {
    return this.collection.find(entity => entity.id === id);
  }

  update(id, newEntity) {
    return this.collection.map(entity => {
      if (entity.id === id) {
        return newEntity;
      } else {
        return entity;
      }
    });
  }

  create(entity) {
    this.collection.push(entity);
    return entity;
  }

  delete(id) {
    return this.collection.filter(entity => entity.id !== id);
  }
}

module.exports = SensorModel;
