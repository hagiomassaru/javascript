# Aprendendo javascript

## Navegacao para outros linguagens relacionadas

* [CSS3](css.md)
* [HTML5](html.md)


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
- `!==` Descoincidência (Diferente tanto em valo e tipo)
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