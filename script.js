// programa para calculo de media -> nomes / nota1, nota2 dividido por 2 / aprovados e reprovados

var objeto = { tag: [1, 2] };
objeto.nome = "nome";
objeto["sobrenome"] = "nome";
objeto["funcoe"] = function (numero) {
    resultado = numero * this.tag[1];
    return resultado;
};
console.log(objeto);
console.log(objeto.funcoe(8));
