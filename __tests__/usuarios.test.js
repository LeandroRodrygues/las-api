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
      bairro: "Jacuipe",
      celular: "71999998564",
      cep: "42800000",
      complemento: "casa",
      cpf: "02273985485",
      dataNascimento: "1985-11-09T02:00:00.000Z",
      email: "leandro@gmail.com",
      endereco: "Rua santo antonio",
      id: 1,
      nome: "Leandro",
      nomeCompleto: "Leandro g Rodrigues",
      numero: 45,
      rg: "88120",
      senha: "123456",
      telefone: "71999498364",
      urlFotoPerfil: "https://randomuser.me/api/portraits/men/91.jpg",
    });
  });

  test("Buscar usuário por um id inexistente", async () => {
    const resp = await request.get("/usuarios/999");
    expect(resp.statusCode).toBe(404);
  });

  test("Inserir usuário com dados inválidos", async () => {
    const resp = await request.post("/usuarios").send({
      nome: "Leandro",
      urlFotoPerfil: "https://randomuser.me/api/portraits/men/71.jpg",
    });
    expect(resp.statusCode).toBe(400);
    expect(resp.body).toEqual([
      {
        mensagem: "Nome deve ser informado e deve ser único",
        nome: "nome",
        valido: false,
      },
    ]);
  });
});
