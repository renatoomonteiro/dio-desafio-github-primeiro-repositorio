/*
Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100; // preço original do produto
const formaDePagamento = 4; // condição de pagamento escolhida

function aplicarDesconto(valor,desconto) {  
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {  
    return valor + (valor * (juros / 100));
}

if (formaDePagamento === 1) {
    const precoFinal = aplicarDesconto(precoEtiqueta, 10);
    console.log("Preço final à vista no débito: R$ " + precoFinal.toFixed(2));
} else if (formaDePagamento === 2) {
    const precoFinal = aplicarDesconto(precoEtiqueta, 15);
    console.log("Preço final à vista no dinheiro ou PIX: R$ " + precoFinal.toFixed(2));
} else if (formaDePagamento === 3) {
    console.log("Preço final em duas vezes: R$ " + precoEtiqueta.toFixed(2));
} else if (formaDePagamento === 4) {
    const precoFinal = aplicarJuros(precoEtiqueta,  10);      
    console.log("Preço final acima de duas vezes com juros: R$ " + precoFinal.toFixed(2));
} else {
    console.log("Forma de pagamento inválida.");
}