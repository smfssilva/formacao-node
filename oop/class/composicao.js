class Leitor {

    Ler(caminho) {
        return 'Conteúdo de arquivo'
    }
}

class Escritor {

    Escrever(arquivo, conteudo) {
        console.log('Conteudo escrito');
    }
}

class Criador {

    Criar(nome) {
        console.log('Arquivo criado');
    }
}

class Destuidor {
    Deletar(nome) {
        console.log('Deletando arquivo');
    }
}

class ManipuladorDeArquivos {

    constructor(nome) {

        this.nome = nome
        this.leitor = new Leitor()
        this.escritor = new Escritor()
        this.criador = new Criador()
        this.destuidor = new Destuidor()
    }

}

class GerenciadorDeUsuarios {

    constructor() {
        this.criador = new Criador()
        this.escritor = new Escritor()
    }

    SalvarListaDeUsuarios(lista) {
        this.criador.Criar('usuarios.txt')
        this.escritor.Escrever('usuarios.txt', lista)
    }
}


let manipulador = new ManipuladorDeArquivos('meuarquivo.txt')
manipulador.leitor.Ler()
manipulador.escritor.Escrever()
manipulador.criador.Criar()
manipulador.destuidor.Deletar()

let usuario = new GerenciadorDeUsuarios()

usuario.SalvarListaDeUsuarios(['Silva', 'Maciel'])