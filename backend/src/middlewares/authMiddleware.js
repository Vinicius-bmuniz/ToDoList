const jwt = require("../security/jwt");
// const jwt = require("jsonwebtoken");

const validateToken = (request, response, next) => {
  const tokenHeader = request.headers.authentication;

  if (!tokenHeader)
    return response
      .status(401)
      .json({ message: "No permission to access this page!" });

  const tokenValid = jwt.validateToken(tokenHeader);

  request.body.Userid = tokenValid.id;

  next();
};

module.exports = {
  validateToken,
};
