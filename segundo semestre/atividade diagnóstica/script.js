//parte de verficação do email
let mascara = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = document.querySelector("#email");
let mensagem_email = document.querySelector("#mensagem_email");

email.addEventListener("keyup", function () {
    if (email.value === "") {
        mensagem_email.textContent = "preencha o e-mail";
        mensagem_email.style.color = "red";
    } else if (!mascara.test(email.value)) {
        mensagem_email.textContent = "e-mail incompleto ";
        mensagem_email.style.color = "red";
    } else {
        mensagem_email.textContent = "e-mail correto ";
        mensagem_email.style.color = "green";
    }
});

let nome = document.querySelector("#nome");
let botao = document.querySelector("#botao");
let paragrafoh = document.querySelector("#paragrafoh");
let mensagemfinal = document.querySelector("#mensagemfinal");

botao.addEventListener("click", function () {

    if (nome.value.trim() === "") {
        paragrafoh.textContent = " coloque um nome";
        paragrafoh.style.color = 'red';
        return; 
    } else {
        paragrafoh.textContent = " nome preenchido";
        paragrafoh.style.color = 'green';
    }

  
    if (email.value.trim() === "") {
        mensagem_email.textContent = " coloque um e-mail";
        mensagem_email.style.color = 'red';
        return; 
    } else if (!mascara.test(email.value)) {
        mensagem_email.textContent = " e-mail inválido";
        mensagem_email.style.color = 'red';
        return; 
    } else {
        mensagem_email.textContent = " e-mail válido";
        mensagem_email.style.color = 'green';
    }

    // se tudo deu certo
    mensagemfinal.textContent = "formulário preenchido com sucesso!";
    mensagemfinal.style.color = 'green';
});