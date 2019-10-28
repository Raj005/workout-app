module.exports = services => {
  return (req, res) => {
    try {
      const users = services.userService.getAllUsers();
      res.status(200).json({ users });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};
