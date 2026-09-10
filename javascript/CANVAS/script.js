const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");


//desenha UMA linha
contexto.beginPath();
//avisa o canvas que vai começar um novo desenho, usar antes de faze as linhas e círculos
contexto.moveTo(10,0);
//define onde a linha começa(x,y)
contexto.lineTo(50, 200);
contexto.lineTo(50, 10);
//define onde a linha termina
contexto.stroke();
//esse vai fazer onde desenha a linha mesmo

//desenhar um retângulo
contexto.fillRect(50,50,150,100);
//o fill significa cheio
contexto.strokeRect(250, 50, 150, 100);

contexto.beginPath();
contexto.arc(250,250,50, 0, Math.PI * 2);
//se trocar o 2 por true, vai inverter e ter meia bolinha, se tira o 2, vai ser ao lado contrário
contexto.stroke();