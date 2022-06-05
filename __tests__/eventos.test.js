const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");
const request = supertest(customExpress());

jest.mock("../src/repositorios/eventos.js");
describe("API de Eventos", () => {
  test("Listar Eventos", async () => {
    const res = await request.get("/eventos");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      {
        id: 1,
        nome: "aniversario",
        descricao: "primeiro evento",
        urlFoto: null,
        dataInicio: "2022-06-01",
        dataFim: "2022-06-14",
        status: "agendado",
      },
      {
        id: 2,
        nome: "casamento",
        descricao: "segundo evento",
        urlFoto: null,
        dataInicio: "2022-02-01",
        dataFim: "2022-12-31",
        status: "finalizado",
      },
      {
        id: 3,
        nome: "testes",
        descricao: "5252525252",
        urlFoto: null,
        dataInicio: "2022-05-01",
        dataFim: "2022-05-07",
        status: "em-andamento",
      },
    ]);
  });

  test("Adicionar Evento", async () => {
    const res = await request.post("/Eventos").send({
      id: 99,
      nome: "eventoTeste",
      descricao: "primeiro evento",
      urlFoto: null,
      dataInicio: "24/05/2022",
      dataFim: "2025/05/2022",
      status: null,
    });
    expect(res.body).toEqual({
      dataFim: "2025/05/2022",
      dataInicio: "24/05/2022",
      descricao: "primeiro evento",
      id: 99,
      nome: "eventoTeste",
      status: null,
      urlFoto: null,
    });
    expect(res.statusCode).toBe(201);
  });

  test("Alterar Evento Existente", async () => {
    const resp01 = await request.put("/eventos/1").send({
      id: 1,
      nome: "evento",
      descricao: "primeiro evento",
      urlFoto: null,
      dataInicio: "24/05/2022",
      dataFim: "225/05/2022",
      status: null,
    });

    expect(resp01.body).toEqual({
      id: 1,
      nome: "evento",
      descricao: "primeiro evento",
      urlFoto: null,
      dataInicio: "24/05/2022",
      dataFim: "225/05/2022",
      status: null,
    });
    expect(resp01.statusCode).toBe(200);
  });
  test("Alterar Evento Inexistente", async () => {
    const res = await request.put("/eventos/99").send();
    expect(res.statusCode).toBe(404);
  });

  test("Apagar Evento Existente", async () => {
    const res = await request
      .delete("/eventos/3")
      .send({ descricao: "alterada" });
    expect(res.statusCode).toBe(204);
  });
  test("Apagar Evento Inexistente", async () => {
    const res = await request.delete("/eventos/999");
    expect(res.statusCode).toBe(404);
  });

  test("Buscar Evento por Id Existente", async () => {
    const res = await request.get("/eventos/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      nome: "aniversario",
      descricao: "primeiro evento",
      urlFoto: null,
      dataInicio: "2022-06-01",
      dataFim: "2022-06-14",
      status: "agendado",
    });
  });

  test("Buscar Evento por Id Inexistente", async () => {
    const res = await request.get("/eventos/99");
    expect(res.statusCode).toBe(404);
  });
  test("Buscar Evento por Status Angedado", async () => {
    const res = await request.get("/eventos/status/agendado");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      {
        id: 1,
        nome: "aniversario",
        descricao: "primeiro evento",
        urlFoto: null,
        dataInicio: "2022-06-01",
        dataFim: "2022-06-14",
        status: "agendado",
      },
    ]);
  });
  test("Buscar Evento por Status Em Andamento", async () => {
    const res = await request.get("/eventos/status/em-andamento");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      {
        id: 3,
        nome: "testes",
        descricao: "5252525252",
        urlFoto: null,
        dataInicio: "2022-05-01",
        dataFim: "2022-05-07",
        status: "em-andamento",
      },
    ]);
  });
  test("Buscar Evento por Status Finalizado", async () => {
    const res = await request.get("/eventos/status/finalizado");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      {
        id: 2,
        nome: "casamento",
        descricao: "segundo evento",
        urlFoto: null,
        dataInicio: "2022-02-01",
        dataFim: "2022-12-31",
        status: "finalizado",
      },
    ]);
  });

  test("Buscar Evento por Status Inexistente", async () => {
    const res = await request.get("/eventos/status99");
    expect(res.statusCode).toBe(404);
  });
});
