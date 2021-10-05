# Javascript Orientado a Objeto

[Voltar ao arquivo Javascrip](README.md)


Quase todos as propriedades de um objeto que extraem um conteudo do mesmo, pode ser modificado e afetar o conteudo do html onde foi declarado o script.

Para modificarmos apenas precisamos atribuir um valor ao objeto/elemento.

```JS
// Exemplo
document.body.innerHTML = "alteracao"
```
## Objetos

- `window` -> Objeto principal que se refere a janela. Normalmente omitimos ele EX: `window.console.log()` = `console.log()`
- `console.log()` -> Metodo do objeto `window` que utilizamos com frequencia. Ele imprime um conteudo no console do navegador.
- `document` -> Metodo que extrai o documento html em que o script se encontra.
- `documento.body` -> Podemos puxar tags especificas como o `body` nesse caso 


## Alternativas de alteracao de conteudo

- `document.body.innerHTML = conteudo` -> Extrai/Recebe um html e Modificara o conteudo html do objeto respeitando as tags caso seja inseridas.
- `document.body.textContent = conteudo` -> Extrai/Recebe um valor qualquer e Modificara o conteudo da tag do html referente oa objeto.
- `document.body.innerText = conteudo` -> Extrai/Recebe um valor qualquer e Modificara o conteudo que e exibido na pagina/tela.

## Extraindo conteudo

- `document.getElementsByClassName("par")` -> Puxar conteudo de uma tag (ou varias) usando sua class.
- `document.getElementsByTagName("p")` -> Puxar o conteudo pelo nome de uma (ou varias) tag(s).
- `document.getElementsById("id")` -> Puxar o conteudo pelo nome de um `id`.


OBS: normalmente o resultado dos objetos `document.getElementsBy...` sao arrays (listas) e para extrair o html puro devemos fazer assim:

```JS
document.body.getElementsByTagName("nomeDaTag")[0]; // caso aja mais tag h1 pode verificar o array para ver qua e o que voce quer e indicar o indice.
```
Para realizarmos modificacoes no HTML via CSS3 temos que usar os elementos acima e atribuir a variaveis (e um dos jeitos)

```JS
p = document.getElementsById("id")[0];

```
## Estraindo valores de tags

Para realizarmos isso devemos usar a propriedade `.value` no objeto ou funcao com a tag.
EX:
```JS
let tag = document.getElementById("idDatag");// estou extraindo tag do documento html
console.log(tag.value); // podemos ver que para extrair o valor tive que usar a propriedade `.value`, se for um input sera o 
// valor digitado e se for uma tag com valor determinado sera o valor da tag.
```
## Modificando conteudo e atributos

A variavel `p` ao HTML extraido no ultimo topico, com ele extraido podemos realizar as modificacoes

- `p.className` -> Extrai/Recebe nome da class da tag e possibilita modificacao atribuindo um outro valor.
- `p.style` -> Extrai/Recebe um conteudo html/tag e modifica/extrai o atributo `style`.
- `p.style.backgroundColor` -> Extrai/Recebe um atributo css e modifica/extrai o atributo `backgroudColor`.
OBS: `p.style` tem vario atributos que podemos mudar colocando na variavel `p`, consulte documentacao ou use o intellisense com `ctrl + espaco`
- `p.getAttribute('nomeAtributo')` -> Extrai (apenas) o conteudo do atributo indicado no `valorAtributo`.
- `p.setAttribute('nomeAtributo', 'valorAtributo')` -> Modifica(caso exista)/Cria(caso nao exista) o conteudo do atributo indicado no `valorAtributo`.

## Eventos HTML

- `<tag onclick="codigoJS">` -> atributo que quando ao clicar executa o codigo no valor do atributo.
- `<tagDeEntradaDeTexto oncharge="codigoJS">` -> atributo que quando ao sair do foco executa o `"codigoJS"`.
- `<tagDeEntradaDeTexto oninput="codigoJS">` -> atributo que a cada letra digitada executa o `"codigoJS"`.
- `<tag onload="codigoJS">` -> atributo que executa o `"codigoJS"` apos a pagina HTML carregar.
- `<tag onmouseover="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
- `<tag onmouseout="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
- [Mais eventos](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Editando Eventos direto do javascrip

```JS
documentoOuTag = document.getElementById("id");
documentoOuTag.onclick = codigoOuFuncaoJS;// onclick mesma coisa que onclick so que direto no JS
documentoOuTag.addEventListener("EventoHTML", codigoOuFuncaoJS); /* Serve para cria/alterar "EventoHTML" como : 
* "click" = onclick
* "mouseover" = onmouseover
* "mouseout" = onmouseout
*

/* exemplo */

function f1(e){// se essa funcao for declarada no "codigoOuFuncaoJS"/"addEventListener" (sem parenteses), ele passa como parametro "e" o "EventoHTML"
    let teste = e.target;
    console.log(teste)
}

//-------------------

window.onload = FuncaoOuQualquerCoisa // Executa uma funcao ao carregar a pagina
```

## Acessando tags pais e filhos

OBS: usaremos a variavel `p`

- `p.childrem` -> Extrai a tag filha do elemento HTML
- `p.parentElement` -> Extrai a tag pai do elemento HTML

## Biblioteca Math

- `Math.pi()` -> Exibe o valor de PI
- `Math.sqrt(BaseDaRaiz)` -> Calcula raiz quadrada
- `Math.pow(Base, Expoente)` -> Calculo de potencia
- `Math.random()` -> Gera um numero aleatorio entre 0 e 0.999
- `Math.round(Numero)` -> Arredonda um numero
- `Math.floor(Numero)` -> Arredondamento em piso (arredondar sempre para baixo)
- `Math.ceil(Numero)` -> Arredondar sempre para baixo
[mais](java_math.md)

## JSON - Javascript Object Notation

`JSON` e um representacao de um objeto, nem sempre podemos trabalhar com um objeto 'puro' (principalmente se quisermos mandar para um servidor ou para outra linguagem) entao esse representacao permite que possamos 'converter' o objeto de `string` para um objeto. Eles seriam:

- `JSON.parse(string)` -> converte `string` para `objeto`
- `JSON.stringify(objeto)` -> converte `objeto` para `string`

OBS: padra para string JSON -> `'{"nome":"fabio","idade":26}'` Aspas simples para construcao da string(lado de fora) e aspas duplas para o interior. E todas as palavras inclusive as alfanumericas devem ter aspas duplas e os numeros nao.

## Local Storage - Armazenamento de dados local

- `window.localStorage` -> propriedade padrao, lembrando que o objeto `window` pode ser omitido.
- `localStorage.setItem(StringChave, String)` -> Grava um dado na memoria do navegador 
- `localStorage.getItem(StringChave)` -> Extrai o dado gravado no navegador
- `localStorage.removeItem()` -> Remove o dado gravado no navegador
- `localStorage.clear()` -> Limpa todo(s) o(s) dado(s) gravado(s) no navegador.

## Recarregar pagina

- `location.reload()` -> recarrega pagina.

## Temporizador

- `window.setTimeout(codigoJS, TempoEmMilissegundos)` -> Depois que o tempo no parametro `TempoEmMilissegundos` passar, o parametro `codigoJS` e executado.
- `window.setInterval(codigoJS, TempoEmMilissegundos)` -> Depois que o tempo no parametro `TempoEmMilissegundos` passar, o parametro `codigoJS` e executado e logo depois retornando a contagem (ciclo infinito).
- `window.clearInterval(VariavelArmazenaSetInterval)` -> Essa funcao para o `setInterval` armazenado em uma variavel.
- `window.clearTimeout(VariavelArmazenaSetTimeout)` -> Essa funcao para o `setTimeout` armazenado em uma variavel.

# Alterando atributos HTML com javascript

Esse comando ja foram mostrados antes mas nesse topico iremos mostrar de novo.

- `documentoOuTag.getAttribute('nomeAtributo')` -> Extrai (apenas) o conteudo do atributo indicado no `valorAtributo`.
- `documentoOuTag.setAttribute('nomeAtributo', 'valorAtributo')` -> Modifica(caso exista)/Cria(caso nao exista) o conteudo do atributo indicado no `valorAtributo`.
- `documentoOuTag.addEventListener("nomeAtributo", codigoOuFuncaoJS);` -> Serve para cria/alterar Eventos HTML. [Lista de eventos HTML](https://www.w3schools.com/tags/ref_eventattributes.asp)
OBS: Para referenciarmos um Evento omitirmos o 'on'
    * "click" = onclick
    * "mouseover" = onmouseover
    * "mouseout" = onmouseout
