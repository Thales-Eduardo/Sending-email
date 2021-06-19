function formContato() {
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const telefone = document.querySelector(".telefone").value;
  const mensagem = document.querySelector(".mensagem").value;

  const resposta = {
    name: name,
    email: email,
    telefone: telefone,
    mensagem: mensagem,
  };

  axios
    .post("http://localhost:3333/contato", resposta)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
