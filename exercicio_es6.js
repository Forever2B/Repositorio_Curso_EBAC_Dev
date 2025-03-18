class Aluno {
    static #alunos = [];
    #nome = '';
    #nota = '';

    constructor (nome, nota) {
        this.#nome = nome;
        this.#nota = nota;
        Aluno.#alunos.push(this);
    }

    
    static getTodosObjetos() {
        return Aluno.#alunos;
    }

    RecuperaNome() {
        return(this.#nome);
    };

    RecuperaNota() {
        return(this.#nota);
    };

    static CalculaAlunosPositivos() {
        return Aluno.#alunos.filter(aluno => aluno.RecuperaNota() >= 6);
    }
};


function ImprimirPositivos () {
    console.log('------------------------------');
    
    console.log('Os Alunos que passaram são:');
    const alunosPositivos = Aluno.CalculaAlunosPositivos();
    alunosPositivos.forEach(aluno => {
        console.log(`${aluno.RecuperaNome()}: ${aluno.RecuperaNota()}`);
    });
    
    console.log('------------------------------');
}


// CRIAÇÃO DOS OBJETOS
const Bruno = new Aluno('Bruno', 10);
const Andre = new Aluno('Andre', 8);
const Pedro = new Aluno('Pedro', 3);
const Arthur = new Aluno('Arthur', 4);
const Gustavo = new Aluno('Gustavo', 5);
const Isabelly = new Aluno('Isabelly', 6);


// FUÇÃO QUE IMPRIME TODOS OS ALUNOS QUE PASSARAM E SUAS RESPECTIVAS NOTAS
ImprimirPositivos()