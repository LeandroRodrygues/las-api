const mockUfs = require("./mockUfs.json");

class Ufs {
  listar() {
    return Promise.resolve(mockUfs);
  }

  buscaCidade(cidade) {
    return Promise.resolve((mockUfs.cidade = { cidade }));
  }

  buscaSigla(sigla) {
    return Promise.resolve((mockUfs.sigla = { sigla }));
  }
}

module.exports = new Ufs();
