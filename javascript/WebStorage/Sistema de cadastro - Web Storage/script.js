class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }
    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }
    exibir() {
        console.log(`${this.nome} é um produto`);
    }
}

class Mercadin {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        localStorage.setItem("produtos", JSON.stringify(mercadin.produtos));
        this.exibirNaTela();
    }

    // agora vai ser a parte de conectar com o HTML
    exibirNaTela() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
              <div>
                <p>Nome: ${produto.nome}</p>
               <p>Preço: ${produto.aplicarDesconto()}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}</p>
                <p><button onclick="mercadin.excluirProduto(${indice})"> Excluir </button></p>
              </div>  
   `;
        });
    }
}

const mercadin = new Mercadin();
const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');
const resultado = document.querySelector("#resultado");



botaoCadastrar.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    mercadin.adicionarProduto(produto);
    localStorage.setItem("produtos", JSON.stringify(mercadin.produtos));
    mercadin.exibirNaTela();


});




const dados = localStorage.getItem("produtos");

if (dados) {
    const produtosSalvos = JSON.parse(dados);

    produtosSalvos.forEach(produtoSalvo => {

        const produto = new Produto(
            produtoSalvo.nome,
            produtoSalvo.preco,
            produtoSalvo.categoria,
            produtoSalvo.desconto
        );

        mercadin.adicionarProduto(produto);
    });

    mercadin.exibirNaTela();
}