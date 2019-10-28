class UserService {
  constructor(userModel) {
    this.model = userModel;
  }

  getUsers() {
    return this.model.getAll();
  }

  getUserById(id) {
    return this.model.getById(id);
  }

  updateUser(id, data) {
    return this.model.update(id, data);
  }

  createUser(metadata) {
    return this.model.create(metadata);
  }

  deleteUser(id) {
    return this.model.delete(id);
  }
}

module.exports = UserService;
