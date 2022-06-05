const tiposVendas = require("../src/repositorios/tiposVendas");

describe("Testando classe vendas", () => {
  test("Criar objeto tiposVendas", () => {
    expect(tiposVendas).toBeDefined();
  });

  test("Testar metódo listar", () => {
    expect(tiposVendas.listar()).toBeDefined();
  });

  test("Testar metódo adicionar", () => {
    expect(tiposVendas.adicionar()).toBeDefined();
  });

  test("Testar metódo alterar", () => {
    expect(tiposVendas.alterar()).toBeDefined();
  });

  test("Testar metódo excluir", () => {
    expect(tiposVendas.excluir()).toBeDefined();
  });

  test("Testar metódo buscaPorId", () => {
    expect(tiposVendas.buscaPorId()).toBeDefined();
  });
});
