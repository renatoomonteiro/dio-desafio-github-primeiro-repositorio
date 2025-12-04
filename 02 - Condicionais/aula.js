const numero = 2;
const numeroPar = (numero %  2) === 0;
console.log("O número " + numero + " é par? \n" + numeroPar + '\n');

if (numeroPar) {
    console.log("O número é par");
}   else {
    console.log("O número é ímpar");
}

const numero2 = 5;
if ((numero2 % 2) === 0) {
    console.log("O número é par");
}   else {
    console.log("O número é ímpar");
}