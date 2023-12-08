const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  hash = bcrypt.hashSync(password, 10);
  return hash;
};

const comparePassword = (hash, password) => {
  const userPassword = bcrypt.compareSync(password, hash);
  return userPassword;
};

module.exports = {
  hashPassword,
  comparePassword,
};
