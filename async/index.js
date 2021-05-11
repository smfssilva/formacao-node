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

            let deuErro = true
            if (!deuErro) {
                resolve()
            } else {
                reject('Fila cheia')
            }

        }, 3000);
    })
}

function pegarUsuario(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            resolve([
                {name: 'Sivanilson', lang:'JS'},
                {name: 'Maciel', lang:'Python'},
                {name: 'Ferreira', lang:'Java'},
                {name: 'Silva', lang:'C#'},
    
            ])
        }, 3000)
    })
}


async function principal(){
    
    const id = await pegarId()
    const email = await buscarEmailNoBanco(id)

    try {
        await enviarEmail('Olá, como vai ?', email)
        console.log('E-mail enviado com sucesso!');
    } catch (error) {
        console.log(error);
    }

}

principal()

/*
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail('ola, como vai', email).then(() => {
            console.log('Email enviado para o usario com o id: ' + id);
        }).catch(err => {
            console.log(err);
        })
    })
})
*/
