const fs = require('fs')

fs.readFile('./usuario.json', { encoding: 'utf-8' }, (erro, dados) => {
    if (erro) {
        console.log('Um erro ocorreu!');
    } else {
        const conteudo = JSON.parse(dados)
        conteudo.nome = "Sivanilson M F da Silva"
        console.log(conteudo.nome);

        fs.writeFile('./usuario.json', JSON.stringify(conteudo), (erro) => {
            if (erro) {
                console.log('Ocorreu um erro durante a escrita');
            }
        })
    }
})