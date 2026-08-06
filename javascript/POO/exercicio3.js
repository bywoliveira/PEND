class Produto{
      constructor(nome,preço, estoque){
        this.nome= nome;
        this.preço = preço;
        this.estoque = estoque;
      }

      vender(){
        console.log("o produto foi vendido");
    }

    repor(){
        console.log("o produto precisa ser reposto");
    }

    alterarPreco(){
        console.log("o preço do produto foi alterado")
    }

}

const produto1 = new Produto("Uva", "10", 200);
console.log("Produto 1:", produto1);

const produto2 = new Produto("Fone", "20", 100);
console.log("Produto 2:", produto2);

const produto3 = new Produto("Gelo", "2", 300);
console.log("Produto 3:", produto3);


console.log("-------------------------------------------")
console.log("Atributos do produto 1: ")
console.log("- ", produto1.nome);
console.log("- ", produto1.preço);
console.log("- ", produto1.estoque);
console.log("------------------------------------------ ")
produto1.repor();
console.log("-------------------------------------------")
console.log("Atributos do produto 2: ")
console.log("- ", produto2.nome);
console.log("- ", produto2.preço);
console.log("- ", produto2.estoque);
console.log("------------------------------------------ ")
produto2.vender();
console.log("-------------------------------------------")
console.log("Atributos do produto 3: ")
console.log("- ", produto3.nome);
console.log("- ", produto3.preço);
console.log("- ", produto3.estoque);
console.log("------------------------------------------ ")
produto1.alterarPreco();
