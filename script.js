// programa para calculo de media -> nomes / nota1, nota2 dividido por 2 / aprovados e reprovados

var nomes = ["Igor", "Yuuko", "Massaru"];
var notas = [8.5, 7.0, 4.5];
var notas2 = [2.0, 6.5, 3.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

for (var index in nomes) {
    console.log(nomes[index]);
}
