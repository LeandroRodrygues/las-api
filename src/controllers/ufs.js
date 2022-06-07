const Ufs = require("../models/ufs");

module.exports = (app) => {
  app.get("/ufs", (req, res) => {
    Ufs.listar()
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/ufs/:cidade", (req, res) => {
    const cidade = req.params.cidade;
    Ufs.buscaCidade(cidade)
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/ufs/:sigla", (req, res) => {
    const sigla = req.params.sigla;
    Ufs.buscaSigla(sigla)
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });
};
