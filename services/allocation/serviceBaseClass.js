class AllocationService {
  constructor(allocationModel) {
    this.model = allocationModel;
  }

  getAllocations() {
    return this.model.getAll();
  }

  getAllocationById(id) {
    return this.model.getById(id);
  }

  updateAllocation(id, data) {
    return this.model.update(id, data);
  }

  createAllocation(metadata) {
    return this.model.create(metadata);
  }

  deleteAllocation(id) {
    return this.model.delete(id);
  }
}

module.exports = AllocationService;
