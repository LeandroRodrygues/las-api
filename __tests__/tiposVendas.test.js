const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");
const request = supertest(customExpress());

jest.mock("../src/repositorios/tiposVendas");
describe("API de Vendas", () => {
  test("Listar Vendas", async () => {
    const res = await request.get("/tipos-vendas");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { id: 1, descricao: "lanche" },
      { id: 2, descricao: "almoço" },
      { id: 3, descricao: "bebida" },
      { id: 4, descricao: "comida" },
      { id: 5, descricao: "petisco" },
    ]);
  });

  test("Adicionar Vendas", async () => {
    const resp = await request
      .post("/tipos-vendas")
      .send({ descricao: "recarga" });

    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({ descricao: "recarga", id: 99 });
  });
  test("Alterar Vendas Existente", async () => {
    const res = await request
      .put("/tipos-vendas/3")
      .send({ descricao: "bebidas" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: 3, descricao: "bebidas" });
  });

  test("Alterar Vendas Inexistente", async () => {
    const res = await request
      .put("/tipos-vendas/99")
      .send({ descricao: "lanche" });
    expect(res.statusCode).toBe(404);
  });

  test("Apagar Vendas Existente", async () => {
    const res = await request
      .delete("/tipos-vendas/5")
      .send({ descricao: "petisco" });
    expect(res.statusCode).toBe(204);
  });
  test("Apagar Venda Inexistente", async () => {
    const res = await request
      .put("/tipos-vendas/99")
      .send({ descricao: "lanche" });
    expect(res.statusCode).toBe(404);
  });

  test("Buscar Vendas por Id Existente", async () => {
    const res = await request.get("/tipos-vendas/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: 1, descricao: "lanche" });
  });
  test("Buscar Venda por Id Inexistente", async () => {
    const res = await request.get("/tipos-vendas/99");
    expect(res.statusCode).toBe(404);
  });
});
