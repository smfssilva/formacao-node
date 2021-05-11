const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer')


const leitor = new Reader()
const escritor = new Writer()

async function main() {
    let dados = await leitor.Read('./csv/users.csv')
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)
    usuarios.rows.push(['João dos Santos', 'Formação Teste', 'Teste.js', '5'])


    const html = await HtmlParser.Parse(usuarios)

    escritor.write('./csv/' + Date.now() + '.html', html)


}

main()