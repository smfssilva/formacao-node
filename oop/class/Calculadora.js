class Calculadora {

    static Somar(a = 0, b = 0) {
        console.log(a + b);
    }

    static Sub(a = 0, b = 0) {
        if (a < b) {
            let x, y;
            [x, y] = [b, a];
            [a, b] = [x, y];
        }

        console.log(a - b);

    }

}

Calculadora.Sub(10, 28)