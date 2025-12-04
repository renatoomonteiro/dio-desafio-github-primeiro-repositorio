/*
O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre 
a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
Abaixo de 18.5 Abaixo do peso;
Entre 18.5 e 25 Peso normal;
Entre 25 e 30 Acima do peso;
Entre 30 e 40 Obeso;
Acima de 40 Obesidade Grave;
*/
const peso = 98; // em kg
const altura = 1.67; // em metros    
const imc = peso / (altura * altura);
let condicao;   
if (imc < 18.5) {
    condicao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc < 25) {
    condicao = 'Peso normal';
} else if (imc >= 25 && imc < 30) {
    condicao = 'Acima do peso';
} else if (imc >= 30 && imc < 40) {
    condicao = 'Obeso';
} else {
    condicao = 'Obesidade Grave';
}
console.log("IMC: " + imc.toFixed(2));
console.log("Condição: " + condicao);