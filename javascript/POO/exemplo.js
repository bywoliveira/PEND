//CLASSE- é o modelo do paradigma
class Carro{
     // é o método, com parâmetros, executando automaticamente quando criamos um novo objeto da classe
     //o construtor é como se fosse o "fprmúlario de cadastro"
   constructor(marca, modelo, ano, cor){
    //atributos da classe
    this.marca= marca;
    this.modelo= modelo;
    this.ano= ano;
    this.cor=cor;
    //o this significa "aquele objeto", ele guarda os dados dentro do objeto
   }

    ligar(){
        console.log("Carro ligado");
    }

    acelerar(){
        console.log("Acelerando");
    }

    frear(){
        console.log(`${this.modelo} freiou.`);
    }
    
}
//OBJETO
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1:", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

const carro3 = new Carro("BMW", "iX1", 2024,"Ciano" );
console.log("Carro 3: ", carro3);

console.log("-------------------------------------------")
console.log("Atributos do carro 1: ")
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("------------------------------------------ ")

console.log("-------------------------------------------")
console.log("Atributos do carro 2: ")
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("------------------------------------------ ")

console.log("-------------------------------------------")
console.log("Atributos do carro 3: ")
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("------------------------------------------ ")

//métodos
carro1.ligar();
carro1.acelerar();
carro1.frear();

