const userService = require('../../../services/user');
const users = require('../../mocks/users');

describe('testing user service', () => {
  test('should fetch all the users', () => {
    const allUsers = userService.getAllUsers();
    expect(allUsers.length).toEqual(users.length);
  });
});
