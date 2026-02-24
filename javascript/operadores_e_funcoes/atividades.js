console.log("atividade 1")

function MostrarDataHora(){
    let data= new Date();
    console.log("Hora: ",data.getHours());
}
MostrarDataHora();

console.log("Atividade 2")

function Media(n1,n2){
let media= ((n1+n2)/2);
return media;
}
let nu1 = Number(prompt("Digite um número: "));
let nu2 = Number(prompt("Digite um número: "));
console.log("Resultado:",Media(nu1,nu2));

console.log("************************************************")




console.log("Atividade 3")

let txt = prompt("Digite uma palavra: ")

function analisarTexto(txt){
    let letra= txt.length;
    let tamanho= txt.toUpperCase();
    return letra + "e" + tamanho;    

}

console.log("Quantidade de letras e em maiusculo: " + analisarTexto(txt));









console.log("************************************************")

console.log("atividade 4")
let palavra = prompt("Digite uma palavra: ")

function SeTemApalavraCertaDaTrue(palavra){
    console.log(palavra.includes(HTML));
}

console.log("Contem a palavra HTML", SeTemApalavraCertaDaTrue(palavra));


