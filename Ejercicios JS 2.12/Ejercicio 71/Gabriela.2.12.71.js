class Banco {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    depositar(cantidad) {
        this.#balance += cantidad;
    }

    retirar(cantidad) {
        if(cantidad <= this.#balance) this.#balance -= cantidad;
        else return false;
    }

    muestraBalance() {
        console.log(this.#balance);
    }
}

const cuenta = new Banco(1000);  // Balance inicial de $1000

cuenta.muestraBalance();
cuenta.depositar(500);
cuenta.muestraBalance();
cuenta.retirar(300);
cuenta.muestraBalance();
cuenta.retirar(1500);
cuenta.muestraBalance();
