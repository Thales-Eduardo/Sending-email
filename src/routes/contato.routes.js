import { Router } from 'express';
import { contactEmail } from '../jobs/index';

const Contato = Router();

Contato.post('/', async (req, res) => {
  try {
    const { name, email, telefone, mensagem } = req.body;

    const user = {
      name,
      email,
      telefone,
      mensagem,
    };

    await contactEmail.add(
      { user },
      {
        delay: 10000,
        attemps: 3, //se falhar fass 3 tentativas novamente
      },
    );

    return res.status(200).json('sucesso');
  } catch (error) {
    return res.status(400).json({ error: 'Erro no envio!' });
  }
});

export default Contato;
