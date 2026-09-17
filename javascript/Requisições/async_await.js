const botao = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");
const idUsuario = document.querySelector("#idUsuario");

// 1. Correção no nome da função (addEventListener)
botao.addEventListener("click", async () => {

  const id= idUsuario.value;

  if(id === ""){
    resultado.innerHTML= "Digite um ID";
    return;
  }
  try{
    const resposta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const dados = await resposta.json();
        resultado.innerHTML = `
       <p>
         <strong>${dados.name}</strong><br>
          Email: ${dados.email}<br>
          Cidade: ${dados.address.city}<br>
          Telefone: ${dados.phone}
        </p>
        <hr>
         `;

  }   catch (erro) {
    resultado.innerHTML = "Erro ao buscar usuários.";
     console.log(erro);
   }

});
//   try {
//     const resposta = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     const dados = await resposta.json();

//     resultado.innerHTML = "";

//     dados.forEach((usuario) => {
//       resultado.innerHTML += `
//         <p>
//         <strong>${usuario.name}</strong><br>
//         ${usuario.email}
//         </p>
//         <hr>
//         `;
//     }); // <- Adicionado a chave '}' que faltava para fechar o try
//   } catch (erro) {
//     resultado.innerHTML = "Erro ao buscar usuários.";
//     console.log(erro);
//   }
// });