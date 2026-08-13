class Produto{
    constructor(nome, preco, categoria, desconto){
        this.nome= nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }
     aplicarDesconto() {
    return this.preco - (this.preco * this.desconto / 100);
    }
    exibir(){
          console.log(`${this.nome} é um produto`);
    }
    exibirNaTela() {
    const resultado = document.querySelector("#resultado");

    resultado.innerHTML = `
        <div>
            <p>nome: ${this.nome}</p>
            <p>categoria: ${this.categoria}</p>
            <p>desconto: ${this.desconto}%</p>
            <p>preço : R$ ${this.aplicarDesconto()}</p>
        </div>
    `;
    }
}
const produto = new Produto();
const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');


botaoCadastrar.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);

    produto.exibirNaTela();


});