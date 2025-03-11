class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Esportivo extends Carro {
    constructor(marca, modelo, velocidadeMaxima) {
        super(marca, modelo);
        this.velocidadeMaxima = velocidadeMaxima;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
    }
}

class Popular extends Carro {
    constructor(marca, modelo, velocidadeMaxima) {
        super(marca, modelo);
        this.velocidadeMaxima = velocidadeMaxima;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
    }
}

class Pesado extends Carro {
    constructor(marca, modelo, velocidadeMaxima) {
        super(marca, modelo);
        this.velocidadeMaxima = velocidadeMaxima;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
    }
}

const carroEsportivo = new Esportivo("Ferrari", "F8", 340);
const carroPopular = new Popular("Hyundai", "i10", 185);
const carroPesado = new Pesado("Ford", "C-1933R", 93);

carroEsportivo.mostrarInfo();
console.log("------------------------------");
carroPopular.mostrarInfo();
console.log("------------------------------");
carroPesado.mostrarInfo();