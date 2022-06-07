const repositorio = require("../repositorios/ufs");

class Ufs {
  listar() {
    return repositorio.listar();
  }
  buscaCidade(cidade) {
    return repositorio.buscaCidade(cidade);
  }
  buscaSigla(sigla) {
    return repositorio.buscaSigla(sigla);
  }
}

module.exports = new Ufs();
