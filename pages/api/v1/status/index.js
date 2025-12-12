// O método .send, por padrão não interpreta o charset
function status(request, response) {
  response.status(200).send("Método response");
  // request;
}

// O json assume charset=utf-8 "Padrão Global"
// O json responde ao padrão chave: valor
function status2(request, response) {
  response.status(200).json({ chave: "Método response" });
  // request;
}

export default status2;
