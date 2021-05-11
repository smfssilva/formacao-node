const fs = require('fs')

let oldContent

conteudo = fs.readFile('./nome.txt', { encoding: 'utf-8' }, (err, dados) => {

    if (err) {
        console.log('Ocorreu um erro durante a leitura do arquivo');
    } else {
        oldContent = dados
        console.log(oldContent);
    }
})


fs.writeFile('./nome.txt', 'Nome: Sivanilson', (err) => {
    if (err) {
        console.log('Erro durante o salvamento');
    }
})


