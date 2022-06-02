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
        nomeCompleto: "Leandro g Rodrigues",
        dataNascimento: "1985-11-09T02:00:00.000Z",
        rg: "88120",
        cpf: "02273985485",
        telefone: "71999498364",
        celular: "71999998564",
        email: "leandro@gmail.com",
        senha: "123456",
        cep: "42800000",
        endereco: "Rua santo antonio",
        numero: 45,
        complemento: "casa",
        bairro: "Jacuipe",
      },
      {
        id: 2,
        nome: "Joao",
        urlFotoPerfil: "https://randomuser.me/api/portraits/men/92.jpg",
        nomeCompleto: "Joao Marcelo",
        dataNascimento: "1990-11-09T02:00:00.000Z",
        rg: "4654989",
        cpf: "24685974216",
        telefone: "71999498364",
        celular: "71999998564",
        email: "marcelo@gmail.com",
        senha: "123456",
        cep: "42835000",
        endereco: "Rua Sao salvador",
        numero: 30,
        complemento: "Ap",
        bairro: "Salvador",
      },
    ]);
  });

  test("Consultar usuário por um id existente", async () => {
    const resp = await request.get("/usuarios/1");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 1,
      nome: "Leandro",
      urlFotoPerfil: "https://randomuser.me/api/portraits/men/91.jpg",
      nomeCompleto: "Leandro g Rodrigues",
      dataNascimento: "1985-11-09T02:00:00.000Z",
      rg: "88120",
      cpf: "02273985485",
      telefone: "71999498364",
      celular: "71999998564",
      email: "leandro@gmail.com",
      senha: "123456",
      cep: "42800000",
      endereco: "Rua santo antonio",
      numero: 45,
      complemento: "casa",
      bairro: "Jacuipe",
    });
  });
});
