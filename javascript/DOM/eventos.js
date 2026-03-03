let botao= document.querySelector("#botao");
let texto = document.querySelector(".texto");
//coloque se é classe ou id apos usa o query selector

botao.addEventListener("click", function() {
    //o addEventListener é um objeto
    //toda vez q o usuário clicar, executa uma função
    //ao ser clicado, deve ser alterado para esse texto
    texto.textContent = "Texto alterado após o clique!";
});

let input = document.querySelector("#nome");
//query selector ent indica o id
let resultado = document.querySelector("#resultado");
//quer colocar no resultado td qq tiver no input nome

input.addEventListener("keyup", function (){
    //ao inves do click é o keyup, ele ouve td q é digitado no teclado
    resultado.textContent = input.value;
    //no input value é onde acontece a leitura de valores
    //e atualização em tempo real
});