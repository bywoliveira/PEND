document.getElementById("conteudo").innerHTML="<p>Olá, mundo DOM(Código HTML=inner.HTML)</p>"

document.getElementById("mensagem").textContent =" Texto simples, sem HTML(TEXTCONTENT).";

document.getElementById("foto").setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/250px-PerfectStrawberry.jpg")

let url =document.getElementById("link").getAttribute("href");
console.log(url);

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque")