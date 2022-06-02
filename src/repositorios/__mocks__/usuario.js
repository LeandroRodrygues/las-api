const mockUsuarios = require("./usuarios.json");

class Usuario {
  listar() {
    return Promise.resolve(mockUsuarios);
  }

  buscaPorId(id) {
    return Promise.resolve(mockUsuarios.find((usuario) => usuario.id === id));
  }
}

module.exports = new Usuario();
