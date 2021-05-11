class Dado {

    constructor(faces) {
        this.faces = faces
    }

    Rolar() {
        console.log("Resultado do dado: " + this.gerarNumero(1, this.faces));
    }

    gerarNumero(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        if (max < min) {
            let nmax, nmin;
            [nmax, nmin] = [min, max];
            [max, min] = [nmax, nmin];
        }
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

}

let d6 = new Dado(6)
let d12 = new Dado(12)
let d100 = new Dado(100)

d6.Rolar()
d12.Rolar()
d100.Rolar()

