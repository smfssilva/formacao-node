class Filme {
    constructor(titulo, ano, genero, diretor, duracao) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.diretor = diretor
        this.atores = []
        this.duracao = duracao
    }

    Reproduzir() {
        console.log('Reproduzindo...');
    }

    Pausar() {
        console.log('Pausado');
    }

    Avancar() {
        console.log('Avançar >>');
    }

    Fechar() {
        console.log('Fechar X');
    }

    Ficha() {
        console.log(`Título:  ${this.titulo}`);
        console.log(`Ano:     ${this.ano}`);
        console.log(`Genero:  ${this.genero}`);
        console.log(`Diretor: ${this.diretor}`);
        console.log(`Duração: ${this.duracao}`);
        this.Reproduzir()
    }


}

const vingadores = new Filme('Vingadores', 2014, 'Ação', 'Alguem', '2h')
vingadores.Ficha()

