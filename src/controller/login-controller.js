const UserModel = require("../model/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password)
      return res.status(404).json({ message: "Dados obrigatórios" });

    const currentUser = await UserModel.findOne({ email: email });

    if (!currentUser)
      return res.status(404).json({ message: "Usuário não encontrado" });

    const passwordMatches = bcrypt.compare(password, currentUser.password);
    if (!passwordMatches)
      return res.status(400).json({ message: "Senha inválida" });
    try {
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(
        {
          id: currentUser._id,
        },
        secret
      );
      res
        .status(200)
        .json({ message: "Autenticação realizada com sucesso", token });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Algo deu errado, volte novamente mais tarde" });
    }
  },
};
