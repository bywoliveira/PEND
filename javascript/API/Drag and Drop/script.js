const produto= document.querySelector("#produto");
const carrinho = document.querySelector("#carrinho");

produto.addEventListener("dragstart", function (event){
        event.dataTransfer.setData("text", event.target.id);
    });  
//AGORA TEMOS O OBJETO EVENTO, FORNECIDO PELO NAVEGADOR
//o dragstart identifica que o produto está começando a ser arrastado
//dattransfer.setdata, o tipo de dado entre parametro, nesse caso, text
//target.id vai identificar o produto

//mudar o padrão
carrinho.addEventListener("dragover", function (event){
    event.preventDefault();
    console.log("Pode soltar aqui no carrinho...");
});
//esse dragover é quando está no carrinho(sobre o carrinho)
//ele determina alguma ação

//soltar
carrinho.addEventListener("drop", function(event){
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    // aqui passa apenas o título
    const elemento = document.querySelector("#" +id);
    // aqui vai arrasta o elemento que é produto/imagem

    carrinho.appendChild(elemento);
})
