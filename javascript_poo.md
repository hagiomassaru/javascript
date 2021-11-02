# Javascript Orientado a Objeto

- [Voltar ao arquivo README.md](README.md)
- [Javascript](javascript.md)


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
- `document.querySelector(selectors)` -> Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.


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

A variavel `p` e o HTML extraido no ultimo topico, assim podemos realizar as modificacoes

- `p.className` -> Extrai/Recebe nome da class da tag e possibilita modificacao atribuindo um outro valor.
- `p.style` -> Extrai/Recebe um conteudo html/tag e modifica/extrai o atributo `style`.
- `p.style.backgroundColor` -> Extrai/Recebe um atributo css e modifica/extrai o atributo `backgroudColor`.
OBS: `p.style` tem vario atributos que podemos mudar colocando na variavel `p`, consulte documentacao ou use o intellisense com `ctrl + espaco`
- `p.getAttribute('nomeAtributo')` -> Extrai (apenas) o conteudo do atributo indicado no `valorAtributo`.
- `p.setAttribute('nomeAtributo', 'valorAtributo')` -> Modifica(caso exista)/Cria(caso nao exista) o conteudo do atributo indicado no `valorAtributo`.
obs: Podemos acessar os atributos como objetos EX: `p.src` acessa o atributo `src` e assim vale para qualquer tipo de atributo em HTML
[Mais informacors sobre modificao de atributos](https://www.w3schools.com/jsref/dom_obj_attributes.asp)
- `p.attr.name` -> Retorna o nome de um atributo
EX: 
```JS
var x = document.getElementsByTagName("BUTTON")[0].attributes[0].name;// lembrando que o `.attributes` retorna uma lista, por isso indicar o indice `[0]`
```
- `p.attr.value` -> Define ou retorna o valor do atributo
EX:
```JS
var x = document.getElementsByTagName("BUTTON")[0].attributes[0].value; 

```
## Eventos HTML

- `<tag onclick="codigoJS">` -> atributo que quando ao clicar executa o codigo no valor do atributo.
- `<tagDeEntradaDeTexto oncharge="codigoJS">` -> atributo que quando ao sair do foco executa o `"codigoJS"`.
- `<tagDeEntradaDeTexto oninput="codigoJS">` -> atributo que a cada letra digitada executa o `"codigoJS"`.
- `<tag onload="codigoJS">` -> atributo que executa o `"codigoJS"` apos a pagina HTML carregar.
- `<tag onmouseover="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
- `<tag onmouseout="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
- [Mais eventos](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Editando Eventos direto do javascript

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

## Alterando atributos HTML com javascript

Esse comando ja foram mostrados antes mas nesse topico iremos mostrar de novo.

- `documentoOuTag.getAttribute('nomeAtributo')` -> Extrai (apenas) o conteudo do atributo indicado no `valorAtributo`.
- `documentoOuTag.setAttribute('nomeAtributo', 'valorAtributo')` -> Modifica(caso exista)/Cria(caso nao exista) o conteudo do atributo indicado no `valorAtributo`.
- `documentoOuTag.addEventListener("nomeAtributo", codigoOuFuncaoJS);` -> Serve para cria/alterar Eventos HTML. [Lista de eventos HTML](https://www.w3schools.com/tags/ref_eventattributes.asp)
OBS: Para referenciarmos um Evento omitirmos o 'on'
    * "click" = onclick
    * "mouseover" = onmouseover
    * "mouseout" = onmouseout

## Alterando atributos usando `dataset`

Uma maneira de alterarmos dados em atribuntos em HTML e utilizando o prefixo `data` nos atributos (criados e nao nativos).

EX:

- `<tag data-numero='numero'>` -> declaramos esses atributos criados com o prefixo `data-` e depois o nome do atributo, ficando `data-algumacoisa`.

Declatando os atributos HTML desta maneira, podemos extrair seus valores no `javascript` utilizando a propriedade `.dataset.atributo`.

- `p.dataset.numero` -> O objeto `p` e a tag que HTML que extraimos, sendo o `dataset` a propriedade para estracao dos atributos `data-####`, seguido do nome do atributo sem o `data-`. Assim extraimos o valor. 

## Alterando `<video>` no javascript

OBS: `video` e igual a `document.getElementsById("id")` sendo o `id` o nome da tag de video

- `video.play()` -> Executar o video
- `video.pause()` -> Para o video
- `video.currentTime()` -> Exibe o Tempo do video
- `video.currentTime = tempo` -> Altera o tempo do video.
- `video.playbackRate = tempo` -> Manipula a velocidade do video

## Alterando `<audio>` no javascript

Exemplo do uso da tag `<audio>`
```html
<!-- Reprodução multi-audios em caso de incompatibilidade -->
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>
<!-- Reprodução simples de áudio -->
<audio src="https://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" autoplay>
  O seu navegador não suporta o elemento <code>audio</code>.
</audio>

<!-- Reprodução de áudio com legendas -->
<audio src="foo.ogg">
  <track kind="captions" src="foo.en.vtt" srclang="en" label="English">
  <track kind="captions" src="foo.sv.vtt" srclang="sv" label="Svenska">
</audio>
```
- Atributos HTML
    * `autoplay` -> Especifica que o áudio começará a ser reproduzido assim que estiver pronto
    * `controls` -> Especifica que os controles de áudio devem ser exibidos (como um botão play / pause etc)
    * `loop` -> Especifica que o áudio começará novamente, toda vez que terminar
    * `muted` -> Especifica que a saída de áudio deve ser silenciada
    * `preload` -> Especifica se e como o autor acha que o áudio deve ser carregado quando a página é carregada
    * `src` -> Especifica o URL do arquivo de áudio

- Atributos JS
  * `audio.play()` -> Executar o video
  * `audio.pause()` -> Para o video
  * `audio.currentTime()` -> Exibe o Tempo do video
  * `audio.currentTime = tempo` -> Altera o tempo do video.
  * `audio.playbackRate = tempo` -> Manipula a velocidade do video


## Canvas

Canvas e uma **API** que serve para realizarmos desenhos e animacoes graficas via `javascript` e via `HTML`. Com ela podemos criar tambem Jogos, visualizacao de dados, manipulacao de fotos e processamento de video em tempo real.

Canvas foca amplamente em **2D** podendo usar **3D** atraves do **WebGl** que tambem trabalha tanto com **3D/2D**.

### Como canvas funciona?

primeiro nos declaramos uma tag `<canvas>` no HTML

```html
<canvas id="canvas" width='500' height='500'></canvas>
<!-- e recomentado atribuir um id como feito acima e definir largura e altura com propriedade weidth e height-->
```

O codigo acima apenas cria uma espaco em branco invisivel, podemos definir um estilo atraves do **CSS** para definir um tamanho e ate uma cor.


```html

<style>
  .canvas{
    /* definindo cor */
    background-color: green;
    /* definindo largura e altura */
    width: 500px;
    height: 500px; /* Sendo que definir tamanho em css e diferente que definir usando as propriedades da tag <canvas> */
  }
</style>

<canvas id="canvas" width='500' height='500'></canvas>

```

> **OBS:** Lembrando que podemos alterar o estilo pelo `javascript`.

Agora entraremos na parte do `javascript` comecando extraindo a tag **HTML** e atribuindo a uma variavel.

```javascript

let variavelCanvas = document.getElementById("canvas");

```

depois iremos extrair o "contexto" do elemento **canvas** atribuido na variavel `variavelCanvas` que foi declarada e extraida no **HTML** para podermos efetuar manipulacao.

```javascript
let ctx = tela.getContext("2d");
// O contexto foi colocado na variavel 'ctx'
```
 Como pode ver utilizamos o metodo `getContext` para realizarmos a extracao e tambem atribuimos string `"2d"` como propriedade, isso diz apenas que iremos realizar manipulacao graficas em **2D**, caso quisemos fazer mapulacaes em **3D** e so passar o memo como `"3d"`.

### Metodos para desenhar linhas

 Agora iremos apresentar alguns metodos para desenhar linhas.

- `ctx.moveTo(x, y);` -> Move o ponto inicial da manipulacao para a coordenados dos parametros **x** e **y**
- `ctx.lineTo(x, y);` -> Conecta o ultimo ponto declarado ate a coordenada declaradas nos parametro **x** e **y** criando uma linha.
- `ctx.lineWidth = valor;` -> Define a tamanho do contorno que sera criado 
- `ctx.fillStyle = 'green';` -> Define preencimento do desenho.
- `ctx.strokeStyle = "black"` -> Define a cor do contorno.
> OBS: Os metodos acima deve-se ser declarado antes do metodo `stroke`, caso contrario nao surtira efeito.
- `ctx.stroke();` -> Contorna nos conjuntos de linhas criados.

## Exemplo - Desenhando linhas

 ```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineTo(0, 0);
ctx.lineTo(0, 500);
ctx.lineTo(500, 500);
ctx.lineTo(500, 0);
ctx.lineWidth = 5;
ctx.stroke();
 ```
 ## Resultado

<img src='./images/resultado_canvas1.png' style='width=500px;height:500px'>

