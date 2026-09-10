const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth= 8;
contexto.lineCap="round";
contexto.lineJoin="round";

//bola
contexto.beginPath();
contexto.arc(230,55,25, 0, Math.PI * 2);
//se trocar o 2 por true, vai inverter e ter meia bolinha, se tira o 2, vai ser ao lado contrário
contexto.stroke();
//corpo dele
contexto.beginPath();
contexto.moveTo(230,160);
//define onde a linha começa(x,y)
contexto.lineTo(230, 80);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(230,80);
contexto.lineTo(260,100);
contexto.lineTo(275,70);
//define onde a linha termina
contexto.stroke();

contexto.beginPath();
contexto.moveTo(230, 80);
contexto.lineTo(203,110);
contexto.lineTo(240,130);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(230,160);
contexto.lineTo(190,210);
contexto.lineTo(190,250)
contexto.stroke();

contexto.beginPath();
contexto.moveTo(230,160);
contexto.lineTo(260,210);
contexto.lineTo(260,246);
// contexto.lineTo();
contexto.stroke();
