function formContato() {
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const telefone = document.querySelector(".telefone").value;
  const mensagem = document.querySelector(".mensagem").value;

  const regex =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

  if (!regex.test(email)) {
    alert("E-mail invalido, verificar credencias.");
    email.focus;
    return false;
  }

  const resposta = { name, email, telefone, mensagem };
  sendEmail(resposta);
}

async function sendEmail(resposta) {
  await axios
    .post("http://localhost:3333/contato", resposta)
    .then((res) => {
      if (res) {
        alert("Entraremos em contato.");
      }
    })
    .catch((error) => {
      if (error.response) {
        const { message } = error.response.data;
        alert(message);
      }
    });
}

function mascara() {
  const telefone = document.querySelector(".telefone");

  if (telefone.value.length == 2) {
    telefone.value += "  ";
  }
} //00 000000

function menuAtivar() {
  const menu = document.querySelector(".menu-desk");
  menu.style.display = "block";
}

function menuDesativar() {
  const menu = document.querySelector(".menu-desk");
  menu.style.display = "none";
}
