# Anotações front-end - Aprendendo javascript

- [Voltar ao arquivo README.md](../README.md)
- [Javascrip POO](./javascript_poo.md)

## Maneiras de se usar script.js em um arquivo HTML

Escrevendo no proprio HTML usando a tag `<script>`

```JS
<scrip>

    Conteudo do codigo JS

</script>

```
Utilizando a propriedade `src` da tag script

```js

<script src='script.js'><script>

```

## Funções/Sinais Uteis

- `alert(str)` → mensagem de alerta no navegador.

- `setTimeout(callback,tempo_milissegundos)` -> define um tempo para execução do `callback`.

- `prompt(str)` → mensagem de alerta com entrada de dados.

- `console.log(str)` → imprimir no console do navegador.

- `parseInt(str)` → converter valor em inteiro

- `parseFloat(str)` → converter valor em real (ponto flutuante)

- `string.length` -> verificar tamanho de listas ou strings.

- `//` → Comentar uma linha

- `/* alguma coisa */` → Comentar um paragrafo

- `typeof` -> O operador typeof retorna uma string indicando o tipo de um operando.

    - *Syntax* `typeof operando` / `typeof 37 === 'number';` / `typeof "bla" === 'string';`
- `String(inteiro)` -> Converte qualquer coisa em `String`

- `isNaN` -> Verifica se a String e `NaN`.

- `eval(string)` -> A função `eval()` computa um código JavaScript representado como uma string.
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
        // default e o case padrão caso nenhum atenda condicao do switch
}
```

Essa expressão e muito usada quando temos muitos `if`

## Lacos de repeticao `for`

Sintax abaixo:

```JS
var numero = 5;
// estrutura
// for ( variável ; condicao ; contagem)
for (var variável; variável < numero; variável++){
    bloco de codigo
}
```

Este laco de repetição nos permite controlar melhor as repetições

## Diferença de `of` para `in`

```JS
var arr = ["gato", "cachorro", "macaco"];
for (var i in arr) {
    console.log(i); // Imprime "0", "1", "2"
}

for (var i of arr) {
    console.log(i); // Imprime "gato", "cachorro", "macaco"
}
```
Se por ventura você estiver usando um obj o `for in` iria retornar o nome das chaves.

## Manipulação de strings

- `elemento.toString()` -> Converte qualquer elemento em `string`
- `elemento.length` -> Tamanho da `string`
- `string.charAt(indice)` -> Acessa uma caracter do indice indicado.
- `string.indexOf(string)` -> Identificar o indice de uma caracter especifica (oposto do `.charAt()`)
- `string.replace(substituído, substituto)` -> método para substituir caracteres de uma `strig` (caso queira substituir vários usaremos expressão regular: `/string/g`)
- `string.toUpperCase() / string.toLowerCase()` -> Tudo maiúscula / tudo minuscula
- `string.substr(indiceComeca[, tamanho]))` ->  método `substr()` retorna uma parte da string, começando no índice especificado e estendendo-se por um determinado número de caracteres posteriormente.
- `string.slice()` -> O método `slice()` extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.
- `string.split(separador, limite)` -> Transforma string em lista
- `string.concat(string2 [, ...stringN])` -> O método `concat()` combina o texto de duas ou mais strings e retorna uma nova string.

## Laços de repetição `while`

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
Este laco de repetição executa enquanto a condicao nao e atendida, facilita laços infinitos.

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
lista.includes(elementoProcurado[, fromIndex]); // O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
lista.find(funcao_executara_cada_elemento); // O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
lista.filter(funcao_executara_cada_elemento); // O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
array.indexOf(elementoDePesquisa, [pontoInicial = 0]); // O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

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

## Strict - Restrição e obrigatoriedade de declaração de variavel

```js
"use strict"; // com essa string escrita no topo do documento voce faz com que todas as variaves sejam declaradas.

let variavel = codigo

``` 

## Arrow function

Funcao normal

```js
function codigo(parametro){
    return (parametro * 2);
}
```
Funcao anonima

```js
let codigo = function (parametro){
    return (parametro * 2);
}
```
Arrow function

```js
let codigo = (parametro) => parametro * 2;
//codigo mais simples. repare que o return e omitido e os parenteses também.

```

## Callback

E uma funcao que sera executada quando algum evento acontecer ou algum objeto chegar no estado desejado. Em outras palavras e uma funcao sendo usada como argumento de uma outra funcao.

```js
function teste(teste1,callback){
    callback(); // <---------- callback
    console.log(teste1);
}


```

## Promised

Sao uma outra forma de se usar o callback, mas de forma diferente. Ela consegue rodar dois codigo de forma simultânea usando o `resolve` e `reject`

```js
let promise = new Promise((resolve,reject) => {
    let x = 0;

    if (x == 0){
        resolve("teste1");
    }else{
        reject("teste2");
    }
    
    })

```

quando queremos usar o argumento `resolve` usando o `.then()`

```js
promise.then((teste1)=>{
    console.log(teste1);
})

```
quando queremos usar o argumento `reject` usando o `.catch()`

```js
promise.catch((teste2)=>{
    console.log(teste2);
})

```

## Async / Await

```js

async function codigo(){ // definimos async para dizer que essa funcao e uma asincrona
    await function_codigo(); //usamos o await para definirmos quais comandos devem ser aguardados a execucao para ai sim ir para o proximo.
    console.log('codigo')
}

```

## Filter - filtro de array

O método `filter()` cria um novo array com todos os elementos que passaram no teste (um callback que retornara `true` ou `false`) implementado pela função fornecida.
Exemplo:
```js

// declarando uma funcao para criar objetos
function newNumero(num1, num2) {
    return { num1, num2 };// com esse return nao so retorna um objeto, mas também um indice sem precisar ligar os dois.
}

// declarando uma lista com objetos contendo números
let numeros = [
    newNumero(1, 2),
    newNumero(1, 3),
    newNumero(1, 4),
    newNumero(2, 5),
];

// criando um callback (ou uma condição)
function filtrandoNumeros(numero){
    return numero.num1 > 1; // retornando o callback
}

let numerosFiltrados = numeros.filter(filtrandoNumeros); // lista.filter(callback)
//criando uma lista contendo todos o elementos que passaram pela condição implementada.

console.log(numerosFiltrados);// mostrando a lista dos filtrados

```

## Map - mapeamento de array

O metodo `map()` cria um novo array, mas diferente do `filter()` ele cria uma totalmente diferente, podendo usar todos elementos que passam no teste imprementado pela funcao fornecida.
Exemplo:

```js
// declarando uma funcao para criar objetos
function newNumero(num1, num2) {
    return { num1, num2 };// com esse return nao so retorna um objeto, mas também um indice sem precisar ligar os dois.
}

// declarando uma lista com objetos contendo números
let numeros = [
    newNumero(1, 2),
    newNumero(1, 3),
    newNumero(1, 4),
    newNumero(2, 5),
];

// criando um callback (ou uma condição)
function doisnumeros (num){
    return num.num1 + " esta junto com " + num.num2;  // pademos ver que a maneira que tradamos o retorno da funcao mudou, agora encaramos que vamos criar um array totalmente diferente.
}

console.log(numeros.map(doisnumeros)); // essa funcao retornara um array composta por string e nao por objetos.
```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-06-13%2011-07-02.png)

## Observacoes dos metodaos `filter()` e `map()`

Caso queremos criar um novo array modificando esses elemento na saida, tanto o original e a copia sao modificados.
Exemplo:
```js
// criando uma funcao como ja vimos
function doisnumeros (num){
    num.num1 += 5;// modificando os elementos de saida da funcao
    num.num2 += 2;
    return num.num1 + " esta junto com " + num.num2;
}

console.log(numeros.map(doisnumeros)); // essa funcao retornara um array composta por string e nao por objetos como antes.
console.log(numeros); // aqui mostramos um log do ultimo array
```
saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-06-13%2011-00-40.png)

como podemos ver, os dois arrays foram copidados.


## Valor vs Referência

Quando utilizamos um objeto declarado em outra variavel, criamos um vinculo. Tornando esta mesma variavel um referencia.

```js
let ValorA = { nome: `a`, tipo: `b` }; // criando objeto
let ValorB = ValorA; // Declarando variavel em uma variavel
ValorB.nome = `c`; // Mudando um dos elementos do objeto
console.log(ValorB);
console.log(ValorA);
```
saida:

![saida](./images/Captura%20de%20tela%20de%202022-06-29%2016-37-11.png)

como podemos ver os valores foram modificados mesmo nao tendo alterado a variavel `ValorA`.

Isso nao acontece se usarmos tipos primitivos.

```js
let ValorA = 15; // criando objeto
let ValorB = ValorA; // Declarando variavel em uma variavel
ValorB= `c`; // Mudando um dos elementos do objeto
console.log(ValorB);
console.log(ValorA);
```
saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-06-29%2016-41-17.png)

Com tudo, no javascript existem valores a que a serem declarados em variaveis, podem ser referenciados por `valor` ou por `referencia`.

### Valores que usam `valor`

- `string`
- `numeros racionais`
- `boorlean`
- entre outros tipos primitivos

### Valores que usam `referencia`

- objetos `{}`
- Listas `[]`


Caso queira declarar referenciando como valor podemos usar os seguintes metodos.

**Listas:**

- 1 forma

```js
let ValorA = [1,2,3,4,5,6,7,8,9]; // criando lista
let ValorB = ValorA.slice(); // o método .slice e usado para fatiar listas, mas caso nao passemos algum parâmetro ele copia a lista inteira
ValorB[1] = `c`; // Mudando um dos elementos
console.log(ValorB);
console.log(ValorA);
```

- 2 forma

```js
let ValorA = [1,2,3,4,5,6,7,8,9]; // criando lista
let ValorB = [...ValorA]; // o simbolo ... indica que iremos copiar o valor da variavel seguinte
ValorB[1] = `c`; // Mudando um dos elementos
console.log(ValorB);
console.log(ValorA);
```

saida (ambas as formas):

![saida](./images/saida/Captura%20de%20tela%20de%202022-06-29%2016-53-02.png)

**Objetos:**

- 1 forma

```js
let ValorA = { nome: `a`, tipo: `b` }; // criando objeto
let ValorB = Object.assign({},ValorA); // Copiando objeto com o metodo assign
ValorB.nome = `c`; // modificando objeto
console.log(ValorB);
console.log(ValorA);
```

- 2 forma

```js
let ValorA = { nome: `a`, tipo: `b` }; // criando objeto
let ValorB = {...ValorA}; // Copiando objeto com o metodo ...
ValorB.nome = `c`; // modificando objeto
console.log(ValorB);
console.log(ValorA);

```

saida (ambas as formas):

![saida](./images/saida/Captura%20de%20tela%20de%202022-06-29%2017-00-38.png)


### Spread Operator - ...

Esse operador serve para nos criarmos copias de elementos, sem ser referenciados.

```js
let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9];
let num3 = [...num1,...num2]; // unindo os dois
console.log(num3); // mostrando no log do navegador
```
saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-06-29%2017-14-08.png)

Caso nao nao utilizacimos o `...` ficaria assim

```js
let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9];
let num3 = [num1,num2]; // unindo os dois sem spread operator
console.log(num3); // mostrando no log do navegador

```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-06-29%2017-16-57.png)

Como podemos ver o ceu e o limite.


### Desestruturando um objeto

Podemos desestroturar um objeto usando suas propriedades como variaveis.

```js
let objeto = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};

let { numero } = objeto; // fatiando objeto, estamos declarando uma propriedade do objeto como variavel.

console.log(numero); //verificando se deu certo.
```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-07-01%2016-35-53.png)

Esse metodo funciona caso queira declarar mais de uma e ate mesmo com copia

- Exemplo 1

```js
let objeto = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};

let { numero, rua } = objeto; // fatiando objeto, estamos declarando duas propriedades do objeto como variável.

console.log(numero); //verificando se deu certo.
console.log(rua);

```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-07-01%2016-39-15.png)

- Exemplo 2

```js
let objeto = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};

let { numero, rua, ...copia } = objeto; // fatiando objeto, estamos declarando duas propriedades do objeto como variável.

console.log(numero); //verificando se deu certo.
console.log(rua);
console.log(copia);

```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-07-01%2016-51-56.png)

e com array (listas) e a mesma logica, mas usamos como referencia a posicao.

```js
let objeto = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};
let objeto2 = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};
//         1posisao 2posisao
objetos = [objeto, objeto2];


//  1posisao 2posisao
let [marcos, antonio] = objetos; // fatiando array com objetos

console.log(marcos); //verificando se deu certo.
console.log(antonio);
```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-07-01%2017-07-12.png)

podemos utilizar tambem o spread operator para copiarmos os objetos que sobram.

```js
let objeto = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};
let objeto2 = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};
let objeto3 = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};
let objeto4 = {
    // criando objeto
    numero: 980,
    rua: `rua batista`,
    telefone: 9549541,
};

objetos = [objeto, objeto2, objeto3, objeto4];

let [marcos, antonio, ...outros] = objetos; // fatiando array com objetos, e utilizando spread operator

console.log(marcos); //verificando se deu certo.
console.log(antonio);
console.log(outros);
```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-07-01%2017-13-20.png)

## Fetch

Esse `funcao` serve para buscarmos **API** (Interface de Programacao de aplicacoes) e utilizarmos os seus recursos em nosso projeto.

### Declaracao

```js

let url = `https://economia.awesomeapi.com.br/last/USD-BRL`;


fetch(url)

```
ele retornara como `promissed` entao devemos usar o `then` para converter em objeto.

```js

fetch(url).then

```

e nao so depois disso podemos converter para `JSON`.

```js

fetch(url).then((res)=>{
    
    return res.json();
})

```

sendo assim ja podemos tratar como qualquer objeto jason.

```js

fetch(url).then((res)=>{
    
    return res.json();
})
.then((data)=>{
    console.log(data.USDBRL.high);
});

```

## Tratamento de erros - try catch

`try` vem do ingles de `tentar` e na programacao serve para testarmos uma parte do codigo e tratarmos esse erro com `catch`.

```js

try{ //bloco de código que iremos tratar
    console.log(nome);
}catch(res/*temos que passar o argumento*/){
    // nao colocarei nenhum argumento
}

```

 e tambem podemos usar o `finally` que serve para executarmos esse bloco de codigo idenpendente se houver erro no codigo.

 ```js

try {
    //bloco de código que iremos tratar
    console.log(nome);
} catch (res /*temos que passar o argumento*/) {
    // nao colocarei nenhum argumento
} finally {
    // esse bloco de codigo sempre ira ser executado
    console.log("Boa noite");
}

 ```

 e caso tenhamos uma execao podemos utilizar o `throw`

 ```js

nome = ``;

try {
    if (nome == ``) {
        throw ` O nome nao pode ser vazio`;
    } else {
        console.log(nome);
    }
} catch (res) {}

 ```

## Utilizando `forEach`

O metodo `forEach` serve para percorermos um array aplicando uma funcao para cada elemento.

```js

numbers.forEach(function(parameto) { // A funcao pode ser anonima ou qualquer tipo de outra funcao
    // código
});

```

Ex:

```js

let numeros = [1,2,3,4,5,6,7,8,9];

numeros.forEach(function (parametro) {
    return console.log(parametro*2);
});

```

saida:

![saida](./images/saida/Captura%20de%20tela%20de%202022-09-17%2019-32-35.png)


podemos utilizan junto com arrow function:


```js

let numeros = [1,2,3,4,5,6,7,8,9];

numeros.forEach( parametro => console.log(parametro*2);
);

```

dando o mesmo resultado

