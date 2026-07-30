const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});
//verificação do e-mail pra ver se o campo está completo
let mascara = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = document.querySelector("#email")
let mensagem_senha = document.querySelector("#mensagem_email")
email.addEventListener("keyup", function () {
    if (!mascara.test(email.value)) {
        mensagem_senha.textContent = "o e-mail não está completo"
        mensagem_senha.style.color = "red"
    } else {
        mensagem_senha.textContent = "o e-mail está correto"
        mensagem_senha.style.color = "green"
    }
});
let emaill = document.querySelector("#email")
let botaok = document.querySelector("#botao")
let mensagem_senhaa = document.querySelector("#mensagem_email")


botao.addEventListener("click", function () {
    if (nome.value === "") {
        paragrafoh.textContent = "Coloque um nome";
        paragrafoh.style.color = 'red';
        return;
    } else {
        paragrafoh.textContent = ""; 
    }

    if (emaill.value === "") {
        mensagem_senhaa.textContent = "Coloque um e-mail";
        mensagem_senhaa.style.color = 'red';
        return;
    } else {
        mensagem_senhaa.textContent = "";
    }

    mensagemfinal.textContent = "Formulário preenchido com sucesso!";
    mensagemfinal.style.color = 'green';
});
//esse código é para verificar se o campo do e-mail está devidamente completo, com letra, @, .
//foi criado a varivael mascara que recebeu todos os componentes que devem ter num e=mail
//a variavel email, que tem o id email(mencionado no html)
//e a variavel mensagem senha para mostrar quando o e-mail está certo ou não
//o keyup vai observar o que está sendo escrito dentro do input email 
//o if diz= se esses componentes de mascara não estiverem dentro do input, ent está errado
//e o else é basicamente o contrario