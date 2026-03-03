let vermelho= document.querySelector("#vermelho");
let texto = document.querySelector("#titulo");
let azul= document.querySelector("#azul")

//coloque se é classe ou id apos usa o query selector

botao.addEventListener("click", function() {
    //o addEventListener é um objeto
    //toda vez q o usuário clicar, executa uma função
    //ao ser clicado, deve ser alterado para esse texto
    texto.textContent = "Texto alterado após o clique!";
});