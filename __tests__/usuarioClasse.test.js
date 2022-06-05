const Usuario = require("../src/repositorios/usuario");

describe("Testando classe usuário", () => {
  test("Criar objeto usuario", () => {
    expect(Usuario).toBeDefined();
  });

  test("Testar metódo listar", () => {
    expect(Usuario.listar()).toBeDefined();
  });

  test("Testar metódo adicionar", () => {
    expect(Usuario.adicionar()).toBeDefined();
  });

  test("Testar metódo alterar", () => {
    expect(Usuario.alterar()).toBeDefined();
  });

  test("Testar metódo excluir", () => {
    expect(Usuario.excluir()).toBeDefined();
  });

  test("Testar metódo alterar", () => {
    expect(Usuario.alterar()).toBeDefined();
  });

  test("Testar metódo buscaPorId", () => {
    expect(Usuario.buscaPorId()).toBeDefined();
  });

  test("Testar metódo buscaPorNome", () => {
    expect(Usuario.buscaPorNome()).toBeDefined();
  });

  test("Testar metódo isNomeUsuarioUtilizado", () => {
    expect(Usuario.isNomeUsuarioUtilizado()).toBeDefined();
  });

  test("Testar metódo listaDadosPessoais", () => {
    expect(Usuario.listaDadosPessoais()).toBeDefined();
  });

  test("Testar metódo alterarDadosPessoais", () => {
    expect(Usuario.alterarDadosPessoais()).toBeDefined();
  });

  test("Testar metódo listaContatos", () => {
    expect(Usuario.listaContatos()).toBeDefined();
  });

  test("Testar metódo alterarContatos", () => {
    expect(Usuario.alterarContatos()).toBeDefined();
  });

  test("Testar metódo listaEndereco", () => {
    expect(Usuario.listaEndereco()).toBeDefined();
  });

  test("Testar metódo alterarEndereco", () => {
    expect(Usuario.alterarEndereco()).toBeDefined();
  });

  test("Testar metódo alterarSenha", () => {
    expect(Usuario.alterarSenha()).toBeDefined();
  });
});
