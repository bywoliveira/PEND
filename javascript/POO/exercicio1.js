 class Animal{
   constructor(especie, esqueleto, alimentacao, habitat){
    //atributos da classe
    this.especie= especie;
    this.esqueleto= esqueleto;
    this.alimentacao= alimentacao;
    this.habitat= habitat;
    //o this significa "aquele objeto", ele guarda os dados dentro do objeto
   }
   //métodos
    fugir(){
        console.log("herbivoro");
    }
    cacar(){
        console.log("carnivoro");
    }
    dormir(){
        console.log("dormir");
    }
}

const animal1 = new Animal("tartaruga- jabuti", "vertebrado", "onivoro", "Norte/Nordeste");
console.log("Animal 1:", animal1);

const animal2 = new Animal("Pinguim","vertebrado", "carnívoro", "Sul");
console.log("Animal 2:", animal2); 

const animal3 = new Animal("Peixe dourado","vertebrado", "herbivoro", "água salgada");
console.log("Animal 3:", animal3); 

const animal4 = new Animal("água viva","invertebrado", "carnívoro", "água salgada");
console.log("Animal 4:", animal4); 


console.log("-------------------------------------------")
console.log("Atributos do animal 1: ")
console.log("- ", animal1.especie);
console.log("- ", animal1.esqueleto);
console.log("- ", animal1.alimentacao);
console.log("- ", animal1.habitat);
console.log("------------------------------------------ ")
animal1.dormir();
console.log("-------------------------------------------")
console.log("Atributos do animal 2: ")
console.log("- ", animal2.especie);
console.log("- ", animal2.esqueleto);
console.log("- ", animal2.alimentacao);
console.log("- ", animal2.habitat);
console.log("------------------------------------------ ")
animal1.dormir();
console.log("-------------------------------------------")
console.log("Atributos do animal 3: ")
console.log("- ", animal3.especie);
console.log("- ", animal3.esqueleto);
console.log("- ", animal3.alimentacao);
console.log("- ", animal3.habitat);
console.log("------------------------------------------ ")
animal1.dormir();
console.log("-------------------------------------------")
console.log("Atributos do animal 4: ")
console.log("- ", animal4.especie);
console.log("- ", animal4.esqueleto);
console.log("- ", animal4.alimentacao);
console.log("- ", animal4.habitat);
console.log("------------------------------------------ ")
animal1.dormir();
