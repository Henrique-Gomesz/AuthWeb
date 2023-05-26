const ChampionshipModel = require("../model/championship-model");

module.exports = {
  post: (req, res) => {
    const {
      name,
      game,
      startDate,
      endDate,
      playersQuantity,
      zipCode,
      city,
      state,
      street,
    } = req.body;
    console.log(
      !name,
      !game,
      !startDate,
      !endDate,
      !playersQuantity,
      !zipCode,
      !city,
      !state,
      !street
    );
    if (
      (!name,
      !game,
      !startDate,
      !endDate,
      !playersQuantity,
      !zipCode,
      !city,
      !state,
      !street)
    )
      return res
        .status(400)
        .json({ message: "Todos os dados são obrigatórios" });
    const championship = new ChampionshipModel({
      name,
      game,
      startDate,
      endDate,
      playersQuantity,
      zipCode,
      city,
      state,
      street,
    });
    try {
      championship.save();
      res.status(200).json({ msg: "Campeonato cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro ao armazenar dados" });
    }
  },
  get: async (req, res) => {
    const championships = await ChampionshipModel.find({});
    res.status(200).json({ msg: championships });
  },
};
