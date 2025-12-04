/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima
a sua média e a sua classificação conforme a tabela abaixo. 

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
Média menor que 5, reprovação;
Média entre 5 e 7, recuperação;
Média acima de 7, passou de semestre;
*/

const nota1 = 10.0;
const nota2 = 9.8;
const nota3 = 9.0;  

const media = (nota1 + nota2 + nota3) / 3;
let classificacao;

if (media < 5) {
    classificacao = 'reprovação';
} else if (media >= 5 && media <= 7) {
    classificacao = 'recuperação';
} else {
    classificacao = 'passou de semestre';
}
console.log("Média: " + media.toFixed(2));
console.log("Classificação: " + classificacao);