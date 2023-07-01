const assert = require("assert");
const request = require("supertest");
const createUser = require("../jsons/createUser.json");
const createMovie = require("../jsons/createMovie.json");
const baseURL = "http://localhost:5000/";

// it("Teste da rota de registro, quando ja existe usuario cadastrado com o numero fornecido", async () => {
//   const response = await request(baseURL)
//     .post("register")
//     .send(createUser[0])
//     .expect(409);

//   const responseMessage = response.body?.message;
//   assert.deepEqual(
//     responseMessage,
//     "Esse número já está vinculado a uma conta!"
//   );
// });

// it("Teste da rota de registro, criando novo usuario", async () => {
//   await request(baseURL)
//     .post("register")
//     .send(createUser[2])
//     .expect(201);
// });

it("teste de registro de filme", async () => {
  const response = await request(baseURL)
    .post("register/movie")
    .send(createMovie[1])
    .expect(201);

  console.log({
    response,
  });
});
