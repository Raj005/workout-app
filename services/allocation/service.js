const ServiceBaseClass = require('./serviceBaseClass');

module.exports = model => {
  const serviceInstance = new ServiceBaseClass(model);
  return {
    getAllocationById: id => {
      return serviceInstance.getAllocationById(id);
    },

    createAllocation: allocation => {
      return serviceInstance.createAllocation(allocation);
    }
  };
};
