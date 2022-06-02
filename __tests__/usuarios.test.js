const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");
const request = supertest(customExpress());

jest.mock("../src/repositorios/usuario");

describe("API de usuários", () => {
  test("Listar usuários", async () => {
    const resp = await request.get("/usuarios");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        nome: "Leandro",
        urlFotoPerfil: "https://randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 18,
        nome: "joao",
        urlFotoPerfil: "https://linkinvalidofail.com.br",
      },
      {
        id: 30,
        nome: "leandro goncalves",
        urlFotoPerfil: "https://linkinvalidofail.com.br",
      },
      { id: 31, nome: "leo", urlFotoPerfil: "https://linkinvalidofail.com.br" },
      {
        id: 32,
        nome: "joice",
        urlFotoPerfil: "https://linkinvalidofail.com.br",
      },
    ]);
  });
});
