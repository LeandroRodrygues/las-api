const mockUsuarios = require("./usuarios.json");

class Usuario {
  listar() {
    return Promise.resolve(mockUsuarios);
  }
}

module.exports = new Usuario();
