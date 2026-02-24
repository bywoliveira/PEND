console.log("Olá, JavaScript!");
let a= 10;
let b= 3;
console.log("Adição +:",a+b);
console.log("Subtração - :",a-b);
console.log("Multiplicação *:",a*b);
console.log("Divisão /:",a/b);
console.log("Resto da divisão %:",a%b);
console.log("Exponenciação **",a**b);
let contador =5;
console.log("incremento: ++")
contador++;
console.log(contador);


let nota1= 8;
let nota2= 10;
let nota3= 6;
console.log("média dos números:",(nota1+nota2+nota3)/3);
  
let n1=8;
let n2=2;
console.log(n1%n2)

let x=10;
let y="10";
console.log("se é igual ==",x==y);
console.log("se a variavel é igual e o valor também ===",x===y);
console.log("Diferente !=",x!=y);
console.log("Diferente de valor e tipo !==",x!==y);

console.log("atividade 3")
 let idade=17
if (idade>= 18){
console.log("É maior de idade")
}else{
console.log("é menor de idade")}

console.log("Atividade 4")
 let numero1= 4
 let numero2= 6
if (numero1 > numero2){
console.log(numero1, "é maior")
}else if (numero2>numero1){
console.log(numero2," é maior" )
}else {(numero1= numero2)
console.log("Os números são iguais")
}


console.log("Operadores lógico")
console.log("Operador AND")
let idade_carro =18;
let temCarteira= true;
console.log(idade_carro>= 18 && temCarteira);


console.log("Operador OU/OR- se um deles for verdadeiro, ja da verdadeiro")
let chovendo= false;
let guardaChuva = true;
console.log(chovendo || guardaChuva);

console.log("Inverso, NOT, negação")
let ligado = false;
console.log(!ligado); //true


console.log("Atividade 5")
let nota = 10;
let frequencia =  86
if (nota>= 7 && frequencia>=75){
    console.log("O aluno pode passar")
}else{
    console.log("O aluno não pode passar de ano")
}

console.log("Atividade 6")
let login="sim"
let token ="não"
if (token=='sim' || login =="sim"){
  console.log("seu acesso está verificado")
}else{
    console.log("seu acesso não foi verificado")
}