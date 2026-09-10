const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");

navigator.mediaDevices.getUserMedia({
    video : true,
    // audio : true
})
.then(function(stream){
    const video = document.querySelector("#camera");
    video.srcObject=stream;
})
.catch(function(erro){
    console.log("Erro ao acessar a câmera:", erro);
});
botao.addEventListener("click", function(){
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );
    foto.src = canvas.toDataURL("image/png")
})

const aprovadoloc = document.querySelector("#aprovadoloc");
const reprovadoloc = document.querySelector("#reprovadoloc")


navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude:", posicao.coords.latitude)
        console.log("Longitude:", posicao.coords.longitude)
        console.log("Precisão:", posicao.coords.accuracy)
        aprovadoloc.style.display = "block";
        reprovadoloc.style.display = "none";
    },
    function (erro) {
        console.log("Não foi possível obter a localização", erro);
        reprovadoloc.style.display = "block";
        aprovadoloc.style.display = "none";
    }
);