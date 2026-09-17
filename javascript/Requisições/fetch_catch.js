const botao = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");


botao.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resposta) => resposta.json())
    .then((dados) => {
      resultado.innerHTML = "";
      //essa parte para poder aparecer no html
      
      dados.forEach((usuario) => {
        resultado.innerHTML += `
          <p>
            <strong>${usuario.name}</strong><br>
            ${usuario.email}
          </p>
          <hr>
        `;
      }); 
    })
    .catch((erro) => { // O .catch trata os erros do fetch
      console.log("Erro: ", erro);
    });
});


