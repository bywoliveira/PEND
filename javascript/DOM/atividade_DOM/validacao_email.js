
// parte email      
let email = document.getElementById('email');
let mensagem = document.getElementById('mensagem');


botaot.addEventListener("click", function () {
    if (email.value.includes("@") && email.value.includes(".")) {
        mensagem.textContent = " valido";
        mensagem.style.color = 'green'
    } else {
        mensagem.textContent = " Verifique  @ e .";
        mensagem.style.color = 'red';
    }
});
//parte senha
let senha = document.getElementById('senha');
let paragrafo = document.getElementById('paragrafo');

senha.addEventListener("keyup", function () {
    if (senha.value.length < 6) {
        paragrafo.textContent = "senha fraca"
        paragrafo.style.color = "red"
    } else if (senha.value.length >= 6 && senha.value.length <= 10) {
        paragrafo.textContent = "senha aceitável"
        paragrafo.style.color = "orange"
    } else {
        paragrafo.textContent = "senha forte"
        paragrafo.style.color = "green"
    }
});

// let senhaa = document.querySelector("#senhaa");

// let botaosenha = document.querySelector("#botaoSenha");

// botaosenha.addEventListener("click",function(){
//  if(senhaa.type ==="password") {
//    senhaa.setAttribute('type','text');
//    botaosenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
//  }else{
//  senhaa.setAttribute('type','password');
//    botaosenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
//  }
// });
