class Pessoa {
    constructor(nome, idade, peso, altura) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
    }
  }
  
  class Trabalho {
    constructor(trabalho, cargo, expediente) {
      this.trabalho = trabalho;
      this.cargo = cargo;
      this.expediente = expediente;
    }
  }
  
  const pedroPessoa = new Pessoa('Pedro', 30, 75, 1.80);
  const pedroTrabalho = new Trabalho('Tecnologia', 'Desenvolvedor', '9h-18h');
  
  // Usando Object.assign para combinar os dois objetos
  const pedro = Object.assign({}, pedroPessoa, pedroTrabalho);
  
  console.log(pedro);
  