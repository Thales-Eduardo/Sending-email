import Mail from '../lib/Mail';

export default {
  key: 'mailContato',
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      to: 'Thales Eduardo <thalesdev22@gmail.com>',
      subject: 'Teste de envio',
      template: 'emailDeContato',
      context: {
        name: user.name,
        telefone: user.telefone,
        email: user.email,
        mensagem: user.mensagem,
      },
    });
  },
};
