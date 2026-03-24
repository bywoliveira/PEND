//Atividade 1
let vermelho = document.querySelector("#vermelho");
let texto = document.querySelector("#texto");
let azul = document.querySelector("#azul")
// seletor para cada id

//coloque se é classe ou id apos usa o query selector

azul.addEventListener("click", function () {
    texto.style.color = "blue";
    // quando executa uma ação pelo click, ai tem um evento para quanfo clicar
    //esse evento vai trocar a corpara azul
});
vermelho.addEventListener("click", function () {
    texto.style.color = "red";
    // mesma coisa que o azul, faz um evento e define que quando clicar vai muda para vermelho
});

//-------------------------------------------------------------------
// Atividade 2
let botao = document.querySelector("#botao");

let Mensagem = document.querySelector("#Mensagem")
//coloque se é classe ou id apos usa o query selector


botao.addEventListener('click', function () {
    Mensagem.classList.toggle('esconder');
});

//---------------------------------------------------------------------------
//Atividade 3
let input = document.querySelector('#nome');
let paragrafo = document.querySelector('#contador')

input.addEventListener("keyup", function () {
    //ao inves do click é o keyup, ele ouve td q é digitado no teclado
    let quantidade = input.value.length;
    paragrafo.textContent = "Caracteres digitados: " + quantidade;
    // contador=+1
    //no input value é onde acontece a leitura de valores
    //e atualização em tempo real
});
//Atividade 4
let botao4 = document.querySelector('#botao4');
let clicks = document.querySelector('#clicks')

let contador = 0;

botao4.addEventListener("click", function () {
    
    contador += 1
    clicks.textContent = "Cliques: " + contador;
    //no input value é onde acontece a leitura de valores
    //e atualização em tempo real
});

// Atividade 5 e atividade 6

let elemento = document.querySelector("#elemento")
let botaoe = document.querySelector("#botaoe")
let lista = document.querySelector("#lista")


botaoe.addEventListener("click", function () {
    let novoItem = document.createElement("li")
    novoItem.textContent = elemento.value;
    lista.appendChild(novoItem);
    elemento.value = "";
    // parte do 6
    novoItem.addEventListener("click", function () {
        let resposta = confirm("Tem certeza que deseja excluir este item?");
        if (resposta) {
            console.log("Item excluído.");
        } else {
            console.log("Ação cancelada.");
        }
        lista.removeChild(novoItem);
    });
});

//Atividade Hard
let nyme = document.querySelector("#nyme")
let botaot = document.querySelector("#botaot")
let paragrafoh = document.querySelector("#paragrafoh")


botaot.addEventListener("click", function () {
    if (nyme.value === "") {
        paragrafoh.textContent="Coloque um nome";
        paragrafoh.style.color= 'red'
    } else {
        paragrafoh.textContent="Sucesso";
        paragrafoh.style.color= 'green'
    }
});




