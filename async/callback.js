function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            --------------------------------------
            ${corpo}
            --------------------------------------
            De: Sivanilson Maciel

        `);
        callback('OK', 5, '8s')
    }, 8000);
}

console.log('Inicio do envio de e-mail"');
enviarEmail('Oi, seja bem vindo ao Guia do programador,=', 'smfssilva@yahoo.com', (status, amount, time)=>{
    console.log(`
        Status: ${status}
        ------------------
        Contatos: ${amount}
        ------------------
        Time: ${time}
    `);
    console.log('Tudo OK!');
})