var nota1 = prompt("Nota 1");
var nota2 = prompt("Nota 2");
var media = (parseInt(nota1) + parseInt(nota2)) / 2;
if (media > 7) {
    console.log("Aprovado, sua nota e " + media);
} else {
    console.log("Reprovado, sua nota e " + media);
}
