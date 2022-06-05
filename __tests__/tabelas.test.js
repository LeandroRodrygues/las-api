const Tabelas = require("../src/infraestrutura/database/tabelas");

describe("Testando classe tabelas", () => {
  test("Criar objeto tabelas", () => {
    expect(Tabelas).toBeDefined();
  });

  test("Testar metodo criarUsuarios", () => {
    expect(Tabelas.criarUsuarios).toBeDefined();
  });

  test("Testar metodo criarEventos", () => {
    expect(Tabelas.criarEventos).toBeDefined();
  });

  test("Testar metodo criarTiposVendas", () => {
    expect(Tabelas.criarTiposVendas).toBeDefined();
  });

  test("Testar metodo criarUFS", () => {
    expect(Tabelas.criarUFS).toBeDefined();
  });

  test("Testar metodo criarMunicipios", () => {
    expect(Tabelas.criarMunicipios).toBeDefined();
  });

  test("Testar metodo init", () => {
    expect(Tabelas.init).toBeDefined();
  });
});
