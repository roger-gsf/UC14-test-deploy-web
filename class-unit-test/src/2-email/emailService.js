const emailClient = require('./emailClient');

function enviarEmail(destinatario, mensagem) {
    const remetente = "email@email.com";
    return emailClient.send(remetente, destinatario, mensagem);
}

module.exports = { enviarEmail };
