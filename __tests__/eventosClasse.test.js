const eventos = require("../src/repositorios/eventos");

describe("Testando classe eventos", () => {
  test("Criar objeto eventos", () => {
    expect(eventos).toBeDefined();
  });

  test("Testar metódo listar", () => {
    expect(eventos.listar()).toBeDefined();
  });

  test("Testar metódo adicionar", () => {
    expect(eventos.adicionar()).toBeDefined();
  });

  test("Testar metódo alterar", () => {
    expect(eventos.alterar()).toBeDefined();
  });

  test("Testar metódo excluir", () => {
    expect(eventos.excluir()).toBeDefined();
  });

  test("Testar metódo buscaPorId", () => {
    expect(eventos.buscaPorId()).toBeDefined();
  });

  test("Testar metódo buscarEventosAgendado", () => {
    expect(eventos.buscarEventosAgendado()).toBeDefined();
  });

  test("Testar metódo buscarEventosEmAndamento", () => {
    expect(eventos.buscarEventosEmAndamento()).toBeDefined();
  });

  test("Testar metódo buscarEventosFinalizado", () => {
    expect(eventos.buscarEventosFinalizado()).toBeDefined();
  });
});
