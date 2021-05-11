function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500);
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('smfssilva@yahoo.com')
        }, 2000);
    })
}




function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let deuErro = false
            if (!deuErro) {
                resolve()
            } else {
                reject()
            }

        }, 3000);
    })
}

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail('ola, como vai', email).then(() => {
            console.log('Email enviado para o usario com o id: ' + id);
        }).catch(err => {
            console.log(err);
        })
    })
})

// console.log('antes da promise');
// enviarEmail('Ola mundo','smfssilva@yahoo.com')
// .then(()=> {
//     console.log('Email enviado');
// })
// .catch(()=> {
//     console.log('Ocorreu um erro');
// })
// console.log('depois da promise');