const ServiceBaseClass = require('./serviceBaseClass');

module.exports = model => {
  const serviceInstance = new ServiceBaseClass(model);
  return {
    getUsers: () => {
      return serviceInstance.getUsers();
    }
  };
};
