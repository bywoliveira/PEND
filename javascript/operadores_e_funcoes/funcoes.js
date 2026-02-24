//funcao sem parametros
function saudacao(){
    console.log("Olá, JavaScript!");
}
saudacao();


//o return da função normalmente ocorre com calculos
function somar(a,b){
 return a+b
}
console.log(somar(5,3));

//uso sem o return, para string
function saudacao_nome(nome){
    console.log("Olá, " +nome);
}
saudacao("Ana");

function IMC(peso, altura){
    return peso/(altura*altura)
}
console.log(IMC(57,1.60))

let numero=4
function impar_ou_par(numero){
     if (numero % 2 ===0) {
        console.log("O número é par")
     }else {
        console.log("o Número é impar")
     }
    return numero
    
}

console.log(impar_ou_par(numero))


console.log("*********************FUNÇÕES NATIVAS************************************")

let agora = new Date();
console.log(agora);
//sem utilizar a função

function MostrarDataHora(){
    let data= new Date();
    console.log("Dia: ", data.getDate());
    console.log("Mês: ",data.getMonth()+1);
    //o +1 é porque a contagem inicializa em 0
    console.log("Ano: ",data.getFullYear());
    console.log("Hora: ",data.getHours());
    console.log("Minutos: ",data.getMinutes())

}
MostrarDataHora();

console.log("Data e Hora");
function desafio(){
    let data = new Date();
    console.log(data.getHours()+ ":" + data.getMinutes()+":" + data.getSeconds()+ "   " + data.getDate()+"/" + (data.getMonth()+1 ) + "/" +data.getFullYear());
}
desafio();

console.log("**************Funções Matemáticas**********************")
console.log(Math.PI)

function calcularOperacoes(numero){
    console.log("Raiz: ", Math.sqrt(numero));
    console.log("Arredondado: ", Math.round(numero));
    console.log("Para cima: ", Math.ceil(numero));
    console.log("Para baixo: ", Math.floor(numero));    
    console.log("Quadrado: ", Math.pow(numero, 2))
    console.log("Valor absoluto: ", Math.abs(numero))
}
calcularOperacoes(7.8)

console.log("******************Funções com strig**********************************")
function analisarTexto(texto){
    console.log("Tamanho: " ,texto.length);
    //conta quantas strings tem
    console.log("Maiúsculo: " ,texto.toUpperCase());
    //transforma tudo em maisculo
    console.log("Minúsuculo: ", texto.toLowerCase());
    //transforma tudo em minúsculo
}
analisarTexto("JavaScript");

function SeTemApalavraCertaDaTrue(frase){
    console.log(frase.includes("javasript"));
    //se houver a palavra que está entre parenteses, vai fala que é verdadeira

}
SeTemApalavraCertaDaTrue("Eu estudo JavaScript");

function juntaPalavras(nome,curso){
    return"Aluno: " +nome + "| Curso: " +curso;
//esse aqui vai adicionando
//concatenação
}
console.log(juntaPalavras("José", "Front-end"))