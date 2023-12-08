const userModel = require("../models/usersModel");
const encrypt = require("../security/encryptPassword");
const jwt = require("../security/jwt");

const createUser = async (request, response) => {
  //Verificar se o e-mail já foi utilizado
  const { name, email, password } = request.body;
  const userMail = await userModel.findByEmail(email);
  if (userMail.length > 0) {
    return response.status(401).json({ message: "User already registered!" });
  }

  //Criptografar senha
  const hashPassword = encrypt.hashPassword(password);

  //Criar usuário caso o e-mail não esteja sendo utilizado.
  await userModel.createUser({
    name: name,
    email: email,
    password: hashPassword,
  });

  const idUser = await userModel.findByEmail(email);
  const token = jwt.createToken(idUser[0].id);
  idUser[0].password = undefined;
  idUser[0].id = undefined;

  return response.header({ Authentication: token }).status(201).json({
    message: "User successfully registered!",
    user: idUser,
  });
};

const loginUser = async (request, response) => {
  const { email, password } = request.body;

  //Verificar se email existe
  const user = await userModel.findByEmail(email);
  if (!user.length > 0) {
    return response.status(401).json({ message: "User email not found!" });
  }

  //Verificar se a senha está correta
  const hashPassword = user[0].password;
  const comparePassword = encrypt.comparePassword(hashPassword, password);
  if (!comparePassword) {
    return response
      .status(401)
      .json({ message: "User password is incorrect!" });
  }

  //Gerar token
  const id = user[0].id;
  const token = jwt.createToken(id);

  await userModel.loginUser(email, password);

  user[0].password = undefined;

  return response.header({ Authentication: token }).status(202).json({
    message: "User successfully logged in",
    user: user[0],
    token: token,
  });
};

const getAllUsers = async (_request, response) => {
  const allUsers = await userModel.getAllUsers();
  return response.status(200).json(allUsers);
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
};
