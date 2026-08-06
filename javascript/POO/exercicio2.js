class Aluno{
      constructor(nome, idade, curso, matricula ){
        this.nome= nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula= matricula;
      }

      aprender(){
        console.log("o/a  aluno(a) está aprendendo");
    }

    estudar(){
        console.log("o/a aluno(a) está estudando");
    }

    apresentar(){
        console.log("o/a aluno(a) está apresentando")
    }

}

const aluno1 = new Aluno("Bianca Oliveira", "17", "Desenvolvimento de Sistemas", 5701);
console.log("Aluno 1:", aluno1);
const aluno2 = new Aluno("Rebeca Béo", "16", "Desenvolvimento de Sistemas", "5702");
console.log("Aluno 2:", aluno2);
const aluno3 = new Aluno("Rafaella Udo", "16", "Logistíca", "5703");
console.log("Aluno 3:", aluno3);

console.log("-------------------------------------------")
console.log("Atributos da aluna 1: ")
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);
console.log("------------------------------------------ ")
aluno1.estudar();
console.log("-------------------------------------------")
console.log("Atributos da aluna 2: ")
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);
console.log("------------------------------------------ ")
aluno2.aprender();
console.log("-------------------------------------------")
console.log("Atributos da aluna 3: ")
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);
console.log("------------------------------------------ ")
aluno3.apresentar();
