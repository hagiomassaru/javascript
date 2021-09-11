// programa para calculo de media -> nomes / nota1, nota2 dividido por 2 / aprovados e reprovados

var nomes = ["Igor", "Yuuko", "Massaru"];
var notas = [8.5, 7.0, 6.0];
var notas2 = [2.0, 3.5, 3.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(valor) {
    if (valor < 5) {
        return "Reprovado";
    } else {
        return "Aprovado";
    }
}

for (var index in nomes) {
    var nome = nomes[index];
    var nota1 = notas[index];
    var nota2 = notas2[index];
    var mediaVar = media(nota1, nota2);
    console.log(
        nome +
            " - " +
            nota1 +
            " - " +
            nota2 +
            " - " +
            mediaVar +
            " - " +
            passou(mediaVar)
    );
}
