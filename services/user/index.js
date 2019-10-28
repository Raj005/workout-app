const { userModel } = require('../../models');
const service = require('./service');
const serviceMethods = service(userModel);

module.exports = {
  getAllUsers: () => {
    return serviceMethods.getUsers();
  }
};
