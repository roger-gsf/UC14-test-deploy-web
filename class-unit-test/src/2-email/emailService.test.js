const emailClient = require('./emailClient');
const { enviarEmail } = require('./emailService');

jest.mock('./emailClient');

test('envia o email com os parametros corretos', () => {
    enviarEmail('destination@email.com', 'Olá Mundo');
    expect(emailClient.send).toHaveBeenCalledWith('email@email.com', 'destination@email.com', 'Olá Mundo');
    expect(emailClient.send).toHaveBeenCalledTimes(1);
});
