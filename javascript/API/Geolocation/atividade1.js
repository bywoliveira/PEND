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