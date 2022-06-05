const mockUsuarios = require("./usuariosMock.json");

class Usuario {
  listar() {
    return Promise.resolve(mockUsuarios);
  }

  buscaPorId(id) {
    return Promise.resolve(mockUsuarios.find((usuario) => usuario.id === id));
  }

  adicionar(usuario) {
    return Promise.resolve(usuario && { insertId: 99 });
  }

  isNomeUsuarioUtilizado(nome) {
    return Promise.resolve(
      !!mockUsuarios.find((usuario) => usuario.nome === nome)
    );
  }

  buscaPorNome(nome) {
    return Promise.resolve(
      mockUsuarios.find((usuario) => usuario.nome === nome)
    );
  }

  alterar(id) {
    return Promise.resolve(mockUsuarios.find((usuario) => usuario.id == id));
  }

  excluir(id) {
    return Promise.resolve(mockUsuarios.find((usuario) => usuario.id == id));
  }
}

module.exports = new Usuario();
