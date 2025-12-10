// test("Nome", () => {
//   console.log("Funcionou?");
// });

// test("Outro teste", () => {
//   console.log("Mais um teste");
// });

// test("Esperando", () => {
//   expect(1).toBe(1);
// });

const calcula = require("../testemodels/testecalculadora");

test("Teste1", () => {
  const result = calcula.somar(4, 6);
  expect(result).toBe(10);
});

test("Teste2", () => {
  const result = calcula.somar("banana", 786);
  expect(result).toBe("Fluminense2023");
});

test("Teste2", () => {
  const result = calcula.somar(24576, "maçã");
  expect(result).toBe("Fluminense2023");
  console.log("Fluminense2023");
});
