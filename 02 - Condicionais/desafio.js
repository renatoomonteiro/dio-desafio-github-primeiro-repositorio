/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 – Preço do etanol;
2 – Preço da gasolina;
3 – O tipo de combustível que está no seu carro;
4 – Gasto médio de combustível do carro por KM;
5 – Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'etanol';
const gastoMedioPorKm = 10; // 10 km por litro
const distanciaEmKm = 100; // distância da viagem 
let valorGasto;

const litrosConsumidos = distanciaEmKm / gastoMedioPorKm;
if (tipoCombustivel === 'etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
} else if (tipoCombustivel === 'gasolina') {
    valorGasto = litrosConsumidos * precoGasolina;
}
console.log("O valor gasto na viagem será de R$ " + valorGasto.toFixed(2));
