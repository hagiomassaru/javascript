function nurmex(tag, nome, sobrenome) {
    this.tag = tag;
    this.nome = nome;
    this.sobrenome = sobrenome;
}

var teste = new nurmex("lala", "massaru", "hagio");
console.log(teste.sobrenome);
