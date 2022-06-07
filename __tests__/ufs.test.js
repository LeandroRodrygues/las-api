const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");
const request = supertest(customExpress());

jest.mock("../src/repositorios/ufs");

describe("API de UF's", () => {
  test("Listar Todas UF's", async () => {
    const res = await request.get("/ufs");
    expect(res.body).toEqual([
      {
        id: 1,

        sigla: "AC",
        estado: "Acre",
        cidade: "Rio Branco",
      },
      {
        id: 2,

        sigla: "AL",
        estado: "Alagoas",
        cidade: "Maceió",
      },
      {
        id: 3,

        sigla: "AM",
        estado: "Amazonas",
        cidade: "Manaus",
      },
      {
        id: 4,

        sigla: "AP",
        estado: "Amapá",
        cidade: "Macapá",
      },
      {
        id: 5,

        sigla: "BA",
        estado: "Bahia",
        cidade: "Salvador",
      },
    ]);
  });
  test("Listar Cidades", async () => {
    const resp = await request.get("/ufs/salvador");
    expect(resp.body).toEqual({ cidade: "salvador" });
  });
  test("Listar Sigla", async () => {
    const resp = await request.get("/ufs/ba");
    expect(resp.body).toEqual({ cidade: "ba" });
  });
});
