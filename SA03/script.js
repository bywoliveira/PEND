//aqui nessa parte é o menu hamburger, que ja estava anteriormente e serve para a media query, pra se adequar dps

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

// aqui é o DOM da API de noticias
//a api utilizada foi a news.data.io, que da as noticias e tem ate filtros que podem mudar a noticia

const apiKey = 'pub_06006fd0b6c34e4aa6a4ec671d36c808';
//aqui é a chave da API
const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=br&language=pt`;
//e aqui serve pra gente utilizar ela efetivamente

async function buscarNoticias() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        const articles = data.results;

        exibirNoticias(articles);

    } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error);
    }
}
//essa função aqui serve pra pegar as noticias de la e trazer para o site
//regularmente está mudando as notícias


function exibirNoticias(articles) {
    const container = document.querySelector('.noticias-esquerda');
    container.innerHTML = ''; 
    articles.forEach(article => {
      
        const espacoNoticia = document.createElement('article');
        espacoNoticia.classList.add('espaco_noticia');

        const dentroNoticia = document.createElement('div');
        dentroNoticia.classList.add('dentro_noticia');

        const titulo = document.createElement('h2');
        titulo.textContent = article.title ?? 'Sem título';

        const descricao = document.createElement('p');
        descricao.textContent = article.description ?? 'Sem descrição';

        const link = document.createElement('a');
        link.href = article.link;
        link.target = '_blank';
        link.textContent = 'Leia mais';

        const data = document.createElement('span');
        data.classList.add('data');
        data.textContent = article.pubDate ?? '';

        dentroNoticia.appendChild(titulo);
        dentroNoticia.appendChild(descricao);
        dentroNoticia.appendChild(link);
        dentroNoticia.appendChild(data);

        
        const imagemNoticia = document.createElement('div');
        imagemNoticia.classList.add('imagem_noticia');
        if (article.image_url) {
            const img = document.createElement('img');
            img.src = article.image_url;
            img.alt = article.title ?? '';
            imagemNoticia.appendChild(img);
        }
        espacoNoticia.appendChild(dentroNoticia);
        espacoNoticia.appendChild(imagemNoticia);
        container.appendChild(espacoNoticia);
    });
}
//essa parte é uma das mais importantes, pois ela que pega essa API e traz para o HTML
//com a ajuda do DOM, o DOM vai criar elementos que seja o suficiente para a quantidade de dados que a API traz
//como por exemplo artigo, div, que vai ser exatamente a construção do que tinha antes no estático, so que agora dinamico
//e suficiente para a quantidade de dados


buscarNoticias();






//essa parte é a de relógio no menu, que vai mudar a todo momento
const agora = new Date();

function MostrarDataHora() {
    const data = new Date();
    const resultado = document.querySelector("#relogio");
    resultado.innerHTML =

    String(data.getDate()).padStart(2, "0") + "/" +
    String(data.getMonth() + 1).padStart(2, "0") + "/" +
    data.getFullYear().toString().slice(-2) + " " +
    String(data.getHours()).padStart(2, "0") + ":" +
    String(data.getMinutes()).padStart(2, "0") + ":" +
    String(data.getSeconds()).padStart(2, "0");
}

MostrarDataHora();
setInterval(MostrarDataHora, 1000);
//eu tive a ideia de colocar o relógio para o usuário ter noção do horário em que as noticias sairam
//ent usei a função simples do relógio, apenas deixei ela visível para o usuário utilizando o inner.html
//também mostra os segundos e esse setInterval é para atualizar sem ter q atualizar a página




/// temperatura da cidade

//essa api ela é a open-meteo.com e ela mostra o clima da cidade de mococa- sp
const urlClima = "https://api.open-meteo.com/v1/forecast?latitude=-21.47&longitude=-47.00&current=temperature_2m&timezone=America/Sao_Paulo";

async function buscarClima() {
    const elemento = document.querySelector('#clima');

    try {
        const response = await fetch(urlClima);
        const data = await response.json();
        elemento.textContent = Math.round(data.current.temperature_2m) + "°C";

    } catch (error) {
        console.error('Erro ao buscar o clima:', error);
    }
}
buscarClima();
setInterval(buscarClima, 10 * 60 * 1000);




