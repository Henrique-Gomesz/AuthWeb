const UserModel = require("../model/user-model");
const bcrypt = require("bcrypt");
module.exports = {
  post: async (req, res) => {
    const {
      name,
      email,
      telephone,
      sex,
      birthdate,
      city,
      state,
      zipCode,
      street,
      password,
    } = req.body;

    if (
      (!name,
      !email,
      !telephone,
      !sex,
      !birthdate,
      !city,
      !state,
      !zipCode,
      !street,
      !password)
    )
      return res
        .status(400)
        .json({ message: "Todos os dados são obrigatórios" });

    const userExists = await UserModel.findOne({ email: email });

    if (userExists)
      return res.status(422).json({ message: "E-mail já cadastrado" });

    //Create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new UserModel({
      name,
      email,
      telephone,
      sex,
      birthdate,
      city,
      state,
      zipCode,
      street,
      password: passwordHash,
    });

    try {
      await newUser.save();
      res.status(201).json({ message: "Usuário criado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Algo deu errado" });
    }
  },
};
