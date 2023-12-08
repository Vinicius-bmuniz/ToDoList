const connection = require("./connection");

createUser = async (user) => {
  const { name, email, password } = user;
  const created_at = new Date(Date.now()).toUTCString();

  const createdUser = await connection.execute(
    "INSERT INTO users(name, email, password, created_at) VALUES (?, ?, ?, ?)",
    [name, email, password, created_at]
  );

  return createdUser;
};

getAllUsers = async () => {
  const [usersList] = await connection.execute("SELECT * FROM users");
  return usersList;
};

findByEmail = async (email) => {
  const [findByEmail] = await connection.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return findByEmail;
};

loginUser = async (email, password) => {
  const findUser = await connection.execute(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );

  return findUser;
};

module.exports = {
  createUser,
  getAllUsers,
  findByEmail,
  loginUser,
};
