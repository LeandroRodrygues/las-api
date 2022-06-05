const mockUsuarios = require("./usuariosMock.json");
const dadosPessoaisMock = require("./dadosPessoaisMock.json");
const contatosMock = require("./contatosMock.json");
const enderecoMock = require("./enderecoMock");

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

  listaDadosPessoais(id) {
    return Promise.resolve(
      dadosPessoaisMock[id - 1] ? dadosPessoaisMock[id - 1] : []
    );
  }

  listaContatos(id) {
    return Promise.resolve(contatosMock[id - 1] ? contatosMock[id - 1] : []);
  }

  listaEndereco(id) {
    return Promise.resolve(enderecoMock[id - 1] ? enderecoMock[id - 1] : []);
  }

  alterarDadosPessoais(id) {
    return Promise.resolve(
      dadosPessoaisMock.find((usuario) => usuario.id == id)
    );
  }

  alterarContatos(id) {
    return Promise.resolve(contatosMock.find((usuario) => usuario.id == id));
  }
}

module.exports = new Usuario();
