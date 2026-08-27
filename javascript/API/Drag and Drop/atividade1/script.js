
const arquivo = document.querySelector("#estacao_arquivos");
const listaArquivos = document.querySelector("#lista_arquivos");

let arquivosPDF = []; 
//array pra pode conseguir faze a lista de vários PDF


// Previne o comportamento padrão do navegador (abrir o PDF em nova aba)
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  window.addEventListener(eventName, e => e.preventDefault());
});

// Adiciona efeito visual quando o arquivo está sobre a zona
arquivo.addEventListener('dragover', () => arquivo.classList.add('dragover'));
arquivo.addEventListener('dragleave', () => arquivo.classList.remove('dragover'));

// Captura o arquivo quando solto
arquivo.addEventListener('drop', (e) => {
  arquivo.classList.remove('dragover');
  const files = e.dataTransfer.files;
  
  if (files.length > 0 && files[0].type === "application/pdf") {
    console.log("PDF recebido:", files[0].name);
    // Aqui você envia o arquivo para o seu servidor ou processa localmente
  } else {
    alert("Por favor, envie apenas arquivos no formato PDF.");
  }
});

// areaFoto.addEventListener("drop", function (event) {

//     event.preventDefault();

//     const arquivo = event.dataTransfer.files[0];

//     if (arquivo.type.startsWith("image/")) {

//         const imagem = document.createElement("img");

//         imagem.src = URL.createObjectURL(arquivo);

//         areaFoto.innerHTML = "";

//         areaFoto.appendChild(imagem);

//     } else {

//         alert("Por favor, arraste uma imagem.");

//     }

// });

//essa parte vai pegar os arquivos quando eles foram colocados la
arquivo.addEventListener('drop', (e) => {
  arquivo.classList.remove('dragover');

  const files = Array.from(e.dataTransfer.files); // converte FileList em array
 // e.dataTransfer.files é uma FileList (parecido com array, mas não é array de verdade,
  let algumInvalido = false;
  //essa parte aqui vai mostra para o usuário o que não é PDF, mas apenas no final

  files.forEach(file => {
    //vai percorrer cada arquivo que foi solto
    if (file.type === "application/pdf") {
         //aqui vai checar se realmente é um PDF
      arquivosPDF.push(file);
      //SE for pdf ele vai colocar no array
     
    } else {
      algumInvalido = true;
      //ele vai marcas= se n foi um pdf
    }
  });

  if (algumInvalido) {
    alert("Colocar apenas PDF.");
  }

  mexernaLista();
});



//a partir de agora vai começar a parte que 
//ele vai mostra na parte do HTML

function mexernaLista() {
  listaArquivos.innerHTML = "";
  //vai começar sem nada, por isso as aspas sem nada

  arquivosPDF.forEach((pdf, index) => {
    //index vai ser a posição nele no array, que vai percorrer com o foreach o array
    const item = document.createElement("li");
    //cria elemento
    item.textContent = `📄 ${pdf.name}`;
    //coloca o elemento com o nome dele

    // botão opcional para remover o arquivo da lista
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "✕";
    botaoRemover.style.marginLeft = "8px";
    botaoRemover.addEventListener("click", () => {
        //aqui é um evento de clique, tipo, quando voce for clicar nele
        //ele vai apagar, ja q ali a gente definiu q ele ja vem com o botão de apaga
      arquivosPDF.splice(index, 1);
      //o slice faz apagar apenas um item
      mexernaLista();
      //e esse aqui faz mudar realemente a lista o html
    });

    item.appendChild(botaoRemover);
    listaArquivos.appendChild(item);
  });
}
