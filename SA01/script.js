
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
//esse código é para verificar se o campo do e-mail está devidamente completo, com letra, @, .
//foi criado a varivael mascara que recebeu todos os componentes que devem ter num e=mail
//a variavel email, que tem o id email(mencionado no html)
//e a variavel mensagem senha para mostrar quando o e-mail está certo ou não
//o keyup vai observar o que está sendo escrito dentro do input email 
//o if diz= se esses componentes de mascara não estiverem dentro do input, ent está errado
//e o else é basicamente o contrario

//-----------------------------------------------------------------------------------------------------------------------

//A partir daqui são codigos de verificação de campos, para ter certeza que um campo não ficará vazio ao clicar em confirmar
let nome = document.querySelector("#nome")
let botao = document.querySelector("#botao")
let paragrafoh = document.querySelector("#paragrafoh")
let mensagemfinal = document.querySelector("#mensagemfinal")


//++++++++++++++++++++++++
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

    if (senha.value === "") {
        paragraff.textContent = "Coloque uma senha";
        paragraff.style.color = 'red'
        return;
    } else {
        paragraff.textContent = "";
    }

    if (sconf.value === "") {
        confirm.textContent = "Confirme sua senha";
        confirm.style.color = 'red';
        return;
    } else {
        confirm.textContent = "";
    }

    if (tele.value === "") {
        mf.textContent = "Coloque um telefone";
        mf.style.color = 'red';
        return;
    } else {
        mf.textContent = "";
    }

    mensagemfinal.textContent = "Formulário preenchido com sucesso!";
    mensagemfinal.style.color = 'green';
});


//+++++++++++++++++++++++++++++++++
let senhaf = document.querySelector("#senha")
let botaog = document.querySelector("#botao")
let paragraff = document.querySelector("#paragraf")

//++++++++++++++++++++++++++++++++++++++
let sconf = document.querySelector("#confirma_senha")
let botaol = document.querySelector("#botao")
let confirm = document.querySelector("#confirma")



//+++++++++++++++++++++++++++++++++++++
let tele = document.querySelector("#telefone")
let botaop = document.querySelector("#botao")
let mf = document.querySelector("#mensagem_telefone")

//A partir das variaveis ele vai verificar se os campos ja estão preenchidos ou não, com if e else
//e no final, se todos estiverem certos, ele da o formulário como preenchido


//-------------------------------------------------------------------------------------------------------------------------------------
//adicionar mais telefones

let telefone = document.querySelector("#telefone")
let botaoe = document.querySelector("#botaoe")
let campo = document.querySelector("#campo")


botaoe.addEventListener("click", function () {
    let novoItem = document.createElement("input")
    let novobotao = document.createElement("button")
    novoItem.type = "text"
    novoItem.placeholder = "Digite mais um telefone"
    novobotao.textContent = "Remover";
    campo.appendChild(novoItem);
    campo.appendChild(novobotao);

    novobotao.addEventListener("click", function () {
        novoItem.remove();
        novobotao.remove();
    });

});
//a partir de três variaveis, ele vai adicionar mais um campo para colocar mais um telefone
// foi criado  avariavel novoItem que vai criar um elemento input através do click, com
//um placeholder que aparece para indicar que aquele local novo, é para telefone
//e ele cria com um elemento vazio

//----------------------------------------------------------------------------------------------------------------

//verificação de senha 
let senha = document.getElementById('senha');
let paragraf = document.getElementById('paragraf');

senha.addEventListener("keyup", function () {
    if (senha.value.length < 6) {
        paragraf.textContent = "senha fraca"
        paragraf.style.color = "red"
    } else if (senha.value.length >= 6 && senha.value.length <= 10) {
        paragraf.textContent = "senha aceitável"
        paragraf.style.color = "orange"
    } else {
        paragraf.textContent = "senha forte"
        paragraf.style.color = "green"
    }
});
//essa parte vai verificar se a senha é fraca, aceitavel u forte
//se o value.legth da senha, ou seja o valor que foi colocado, for menor que 6 digitos,n ela é considerada fraca
//a partir disso faz outras verificações com o tamanho da senha que o usuário colocar
//tudo isso usando o keyup, que "observa" o que o usuario colocar para determinar os if e else

//------------------------------------------------------------------------------------------------------------------
//verificar se as senhas se coincidem
let senha1 = document.getElementById('senha');
let senha2 = document.getElementById('confirma_senha');


senha2.addEventListener("keyup", function () {
    if (senha1.value != senha2.value) {
        confirma.textContent = "as senhas não se coincidem"
        confirma.style.color = "red"
    } else {
        confirma.textContent = "as senhas coincidem"
        confirma.style.color = "green"
    }
})
//esse código é para comparar dois campos, o de senha e o de confirma senha
//se a senha1, no caso a senha mesmo, for diferente do campo confirma senha, no caso senha2
//ele vai dar um aviso ao usuário avisando que as senhas não se coincidem, mas se estiver certo, ele avisa também

//----------------------------------------------------------------------------------------------------------------------
//parte do olho da senha
let senha_olho = document.querySelector("#senha");
let botao_olho = document.querySelector("#botao_olho");

botao_olho.addEventListener("click", function () {
    if (senha_olho.type === "password") {
        senha_olho.setAttribute('type', 'text');
        botao_olho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        senha_olho.setAttribute('type', 'password');
        botao_olho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});
//nessa parte é para o "olhinho" da senha, atraves do evento click ele vai mostra o olho aberto ou fcehado

//-----------------------------------------------------------------------------------------------------------
//!!!!!!!!!!!!!!!
//tiraar duvida sobre a parte do telefone e css e o olho q sai
//e as senhas que mesmo mostrando sucesso, podem não coincidir