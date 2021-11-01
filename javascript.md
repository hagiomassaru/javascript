# Anotações front-end - Aprendendo javascript

- [Voltar ao arquivo README.md](README.md)
- [Javascrip POO](javascript_poo.md)

## Maneiras de se usar script.js em um arquivo HTML

Escrevendo no proprio HTML usando a tag `<script>`

```JS
<script>

    Conteudo do codigo JS

</script>

```

## Funções/Sinais Uteis

`alert(str)` → mensagem de alerta no navegador.

`prompt(str)` → mensagem de alerta com entrada de dados.

`console.log(str)` → imprimir no console do navegador.

`parseInt(str)` → converter valor em inteiro

`parseFloat(str)` → converter valor em real (ponto flutuante)

`//` → Comentar uma linha

`/* alguma coisa */` → Comentar um paragrafo

## Declaração de variavel

```js
var nome = valor;
```

Declaracao dentro de `string`

```JS
var nome = `${conteudoJS} loreipsum`
```

## Tipos de dados

Boolean → `True` ou `False`

Null → Nulo/Nenhum

Undefined → Indefinido

Number → Números racionais e irracionais

String → Cadeia de caracteres `"string"`

## Operadores aritméticos

- Adição +
- Subtração -
- Multiplicação *
- Divisão /
- Modulo %
- Incremento ++
- Decremento --

## Atribuições

- `a += 2` = `a = a + 2`
- `a -= 2` = `a = a - 2`
- `a *= 2` = `a = a * 2`
- `a /= 2` = `a = a / 2`
- `a %= 2` = `a = a % 2`

## Operadores de comparação

- `==` igual
- `===` idêntico (semelhante tanto em valor e tipo)
- `!=` Diferente
- `!==` Descoincidência (Diferente tanto em valor e tipo)
- `>` Maior
- `<` Menor
- `>=` Maior ou igual
- `<=` Menor ou igual

## Operadores Lógicos

- `&&` X e X - condição em que ambos tem que ser verdadeiro
- `||` X ou X - condição em que um dos dois tem que ser verdadeiro
- `!` !X - condição que nega a operação booleana.

## Estrutura condicional


```JS
if (condicao) /* Condicao */
    bloco de codigo
else if (segunda condicao)/* segunda condicao*/
    bloco de codigo
else /* senao */
    bloco de codigo
```

- Quando se usa mais de uma linha nas condicoes devemos usar `{}` 

```JS
if (condicao){
    bloco de comando
    bloco de comando 2
}
```

## Operador ternario

Operadores para realizar condicoes

```JS

condicao ? instrucao1 : instrucao2 ;

```

## Estrutura condicional com swich

```JS
var valor = "valorASerComparado";
switch(valor){
    case "valorASerComparado":
        Bloco de codigo;
        break;/*break encerra bloco*/
    case "valorASerComparado2":
        Bloco de codigo
        // sem o break o bloco de codigo nao se encerra, e continua o fluxo pulando para o proximo 'case'
    default:
        Bloco de codigo
        // default e o case padrao caso nenhum atenda condicao do switch
}
```

Essa expressão e muito usada quando temos muitos `if`

## Lacos de repeticao `for`

Sintax abaixo:

```JS
var numero = 5;
// estrutura
// for ( variavel ; condicao ; contagem)
for (var variavel; variavel < numero; variavel++){
    bloco de codigo
}
```

Este laco de repeticao nos permite controlar melhor as repeticoes

## Diferenca de `of` para `in`

```JS
var arr = ["gato", "cachorro", "macaco"];
for (var i in arr) {
    console.log(i); // Imprime "0", "1", "2"
}

for (var i of arr) {
    console.log(i); // Imprime "gato", "cachorro", "macaco"
}
```
Se por ventura você estiver usando um obj o for in iria retornar o nome das chaves.

## Lacos de repeticao `while`

Sintax abaixo:

```JS
var numero = 0;
// estrutura
// while ( condicao )
while (numero < 5) {
    numero++
    bloco de codigo
}
```
Este laco de repeticao executa enquanto a condicao nao e atendida, facilita lacos infinitos.

## Listas (Array) em javascript

```JS
var lista = ["1","2","3"];// primeira forma de declaracao
var lista2 = new Array("1","2","3");// segunda forma de declaracao
lista.push("4");// adicionar um elemento
lista.sort();// organiza elemento em ordem crescente ou alfabetica
lista.unshift("4", "5");// adicionar um ou mais elementos
lista.shift();// exclui o primeiro elemento (com indice 0)
lista.splice("IndiceDoelemento","quantidadeDeElementos");// exclui elementos seguindo condenadas
lista.splice(2, 1);// ex: (indice 2, quantidade 1)
lista.splice("IndiceDoelemento","quantidadeDeElementos","valor");// subistitua o valor no indice indicado ex: (indice,quantidade,valor)

// utilizando "for" e "in" para varrer o array
for (var i in lista){// "in" coloca o numero do index na "var i"
    console.log(list[i]);
};
// utilizando "for" e "of" para varrer o array
for (var i of lista){// "of" coloca o elemento do index na "var i"
    console.log(i)
}

```

## Declaracao de funcao

```JS
function funcao (argumento1,argumento2)/* os argumento nao tem limete mas devemos seguir a mesma ordem */ {
    // bloco de codigo
    var arg1 = argumento1;
    var arg1 = argumento2;
    return arg1, arg2; // retornar valor 
}

funcao(8,7) // chamando funcao
```

## Declaracao de funcao Anonima


```JS
var funcao = function teste(argumento) {
    return argumento;
} // variaveis pode receber funcoes inteiras e virarem outra funcao

var anonimo = function /*podemos omitir o nome da funcao*/(argumento){
    return argumento;
}//isso e uma funcao anonima

// temos outra maneira de se criar funcao anonimas
var anonimo2 = (argumento) => {
    return argumento;
}// tambem chamadas de funcoes setas

```

 **OBS: Quando eu executo uma funcao declarando sem o parenteses, eu nao executo de fato e so referencio o conteudo contido no mesmo. ja se usarmos o parenteses no final executaremos a funcao na hora que a declaramos.**

 ```JS
 var a = funcaoDeclarada; //! acabamos de atribuir o conteudo da 'funcaoDeclarada' na variavel 'a'
 var b = funcaoDeclarada(); //! agora atribuimos o resultado da funcao 'funcaoDeclarada' a variavel 'b'. Isso acontece que ja que usamos parenteses, a funcao e executada imediatamente como descrita acima.
 ```

## Declarando Objetos

```JS
var objeto = {nome:valor, nome2:valor, nome3:valor}
//Objetos sao muito parecidos com dicionarios em python
// mas muda um pouco na hora da chamada
objeto.nome()
// ou
objeto["nome"]

var objeto = new Object(); // maneira alterativa de construir um objeto, nesse momento esta vazio.

objeto.nome = "nome"; // maneiras de adicionar propriedades ao objeto
objeto["nome"] = "nome";


```

Objetos aceito funcoes como valores de elementos de objetos

```JS
var objeto = {
    nota = [1,2];
    valor = [this.nota[0], this.nota[1]] // 'this' e usado quando precisamos referir ao proprio objeto e utilizar nas propriedades dela mesma
    funcao = function (n1,n2){
        return n1, n2
    } // funcao dentro de uma propriedade
}
```

### Construtores

```JS
// construtor e uma funcao que cria objetos
function construtor(parametro){
    return {
        parametro: parametro
    }
}

// temos tambem outro maneira de se criar uma construtor
function construtor(parametro){
    this.parametro = parametro;
    return this.parametro * 2
}

var objeto = new construtor(8);

```

* [Continua em Javascrip POO - Click Aqui](javascript_poo.md)

## Datas

```JS
var data = new Date(); // Cria um objeto com a tada de hoje
new Date(year, month, day, hours, minutes, seconds, milliseconds); // ingles
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo); // Portugues
new Date("DataString"); // utilizar string para modificar data -> Ex: '10/14/1994' ou '10-14-1994' oe 'Oct 14 1994' entre outros.

Date.getFullYear() -> // retorna o ano do objeto
Date.getDate() -> // Retorna o dia
Date.getDay() -> // Retorna o dia da semana -> numerico
Date.getMonth() -> // Retorna o mes.
Date.getTime() -> // Retorna a data convertida em milissegundos

```
## Var,Const e Let

```JS
var coisa = "coisa"; // Variavel Global
const coisa = "coisa"; // Constante -> Igual a variavel local, so nao pode ser reatribuida (mas pode ser modificada).
let coisa = "coisa"; // Variavel Local

```

## Auternativas na contatenacao

Normalmente quando queremos usar variaveis ou metodos dentro de strings usamos contatenacao.
```javascript
let variavel = 'Ola' + mundo
```
mas podemos substituir as aspas (`'` ou `"`) por crase e utilizar o `${variavelOuMetodo}` dentro
```javascript
let variavel = `Ola ${mundo}`
```

