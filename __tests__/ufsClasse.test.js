const Ufs = require("../src/repositorios/ufs");

describe("Testando classe Ufs", () => {
  test("Criar objeto ufs", () => {
    expect(Ufs).toBeDefined();
  });

  test("Testar metódo listar", () => {
    expect(Ufs.listar()).toBeDefined();
  });

  test("Testar metódo buscaCidade", () => {
    expect(Ufs.buscaCidade()).toBeDefined();
  });

  test("Testar metódo buscaSigla", () => {
    expect(Ufs.buscaSigla()).toBeDefined();
  });
});
