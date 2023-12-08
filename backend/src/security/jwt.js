const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 86400,
  });
  return token;
};

const validateToken = (token) => {
  const result = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY,
    (err, decoded) => {
      if (err) return err;
      return decoded;
    }
  );

  return result;
};

module.exports = {
  createToken,
  validateToken,
};
