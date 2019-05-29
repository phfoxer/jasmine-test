class MaiorMenorNumero {

    constructor(lista) {
        this._lista = lista;
        this._maiorNumero;
        this._menorNumero;
    }

    maiorNumero() {
        if (typeof this._lista === typeof []) {
            this._lista.forEach((numero) => {
                this._maiorNumero = this._maiorNumero === undefined ? numero : this._maiorNumero;
                if (numero > this._maiorNumero) {
                    this._maiorNumero = numero;
                }
            });
        }
        return this._maiorNumero;
    }

    menorNumero() {
        if (typeof this._lista === typeof []) {
            this._lista.forEach((numero) => {
                this._maiorNumero = this._maiorNumero === undefined ? numero : this._maiorNumero;
                if (numero < this._maiorNumero) {
                    this._maiorNumero = numero;
                }
            });
        }
        return this._maiorNumero;
    }
}