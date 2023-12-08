const validateFieldName = (request, response, next) => {
  const { body } = request;

  if (body.name === undefined) {
    return response
      .status(400)
      .json({ message: 'The field "name" is required!' });
  }

  if (body.name === null) {
    return response
      .status(400)
      .json({ message: 'The field "name" cannot be null!' });
  }

  if (body.name === "") {
    return response
      .status(400)
      .json({ message: 'The field "name" cannot be empty!' });
  }
  next();
};

const validateFieldEmail = (request, response, next) => {
  const { body } = request;

  if (body.email === undefined) {
    return response
      .status(400)
      .json({ message: 'The field "email" is required!' });
  }

  if (body.email === null) {
    return response
      .status(400)
      .json({ message: 'The field "email" cannot be null!' });
  }

  if (body.email === "") {
    return response
      .status(400)
      .json({ message: 'The field "email" cannot be empty!' });
  }
  next();
};

const validateFieldPassword = (request, response, next) => {
  const { body } = request;

  if (body.password === undefined) {
    return response
      .status(400)
      .json({ message: 'The field "password" is required!' });
  }

  if (body.password === null) {
    return response
      .status(400)
      .json({ message: 'The field "password" cannot be null!' });
  }

  if (body.password === "") {
    return response
      .status(400)
      .json({ message: 'The field "password" cannot be empty!' });
  }
  next();
};

module.exports = {
  validateFieldName,
  validateFieldEmail,
  validateFieldPassword,
};
