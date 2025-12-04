/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
À vista Débito, recebe 10% de desconto;
À vista no Dinheiro ou PIX, recebe 15% de desconto;
Em duas vezes, preço normal de etiqueta sem juros;
Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
//console.log("----- Exercício 03 -----");

const precoEtiqueta = 100.00; // preço normal do produto
const condicaoPagamento = 4; // condição de pagamento escolhida
let valorFinal; 

//Transformar as condições de pagamento em números para facilitar a lógica
if (condicaoPagamento === 1) {
    valorFinal = precoEtiqueta * 0.90; // 10% de desconto
} else if (condicaoPagamento === 2) {
    valorFinal = precoEtiqueta * 0.85; // 15% de desconto
} else if (condicaoPagamento === 3) {
    valorFinal = precoEtiqueta; // preço normal
} else if (condicaoPagamento === 4) {
    valorFinal = precoEtiqueta * 1.10; // 10% de juros
}   else {
    valorFinal = precoEtiqueta; // condição inválida, preço normal
}
console.log("Valor final a ser pago: R$ " + valorFinal.toFixed(2)); 