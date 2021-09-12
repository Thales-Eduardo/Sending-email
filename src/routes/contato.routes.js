import { Router } from "express";

import Mail from "../lib/Mail";

const Contato = Router();

Contato.post("/", async (req, res) => {
  try {
    const { name, email, telefone, mensagem } = req.body;

    await Mail.sendMail({
      to: "Thales Eduardo <thalesdev22@gmail.com>",
      subject: "Teste de envio",
      template: "emailDeContato",
      context: {
        name: name,
        telefone: telefone,
        email: email,
        mensagem: mensagem,
      },
    });

    return res.status(200).json("sucesso");
  } catch (error) {
    return res.status(400).json({ error: "Erro no envio!" });
  }
});

export default Contato;
