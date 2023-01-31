---
tags: [front-end, programacao]
title: html
created: '2021-11-15T13:19:17.938Z'
modified: '2021-12-08T13:35:18.820Z'
---

# Anotações do curso ProgramadorBR 09/06/2021

## [Voltar ao arquivo README.md](./README.md)
# HTML

- `<extag>` - elemento html de abertura
- `</extag>` - elemento html de fechamento
Obs: `<extag>meu titulo</extag>` -> os dois juntos formam um elemento html completo
- `<!DOCTYPE html>` - Indicador de versão do documento (versão Html5)
- `<meta>` - definir metadados
- `<meta charset="utf-8"` - atributo para definir metadados no formato -utf-8-
- Modelo básico de uma pagina index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Minha Primeira pagina</title>
        <meta charset="utf-8">
    </head>

    <body>

    </body>

</html>
```

- `<h1>` -> titulo
- `<h2>` -> subtítulo
- `<h3>` -> sub-subtítulo em diante como `<h4>`, `<h5>` e etc...
- `<p>` -> paragrafo
- `<div>` -> dividir e agrupar elementos.
- `<br>` -> quebra de linha
- `<hr>` -> Cria uma linha horizontal
- `<a>` -> ancoragem ou link. para indicar destino tem que usar o parâmetro `href="destino"`. Ex: 
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Minha Primeira pagina</title>
        <meta charset="utf-8">
    </head>

    <body>
        <a href="index.html">Pagina</a> <!-- essa tag cria o link -->
    </body>

</html>
```

- `<img>` -> tag de imagem. Indicados o fonte da imagem pelo parâmetro `src` e o `alt` para caso a imagem não seja carregada haja uma alternativa. Ex:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Minha Primeira pagina</title>
        <meta charset="utf-8">
    </head>

    <body>
        <img src="https://url.gratis/QPh9W" alt="Sorvetes Mistos"> <!-- tag de imagem -->
        <img src="images/sorveteestudo.jpg" alt="Sorvetes Estudo">
        <a href="https://www.revistamenu.com.br/wp-content/uploads/2020/07/sorveteestudo.jpg">
            <img src="images/sorveteestudo.jpg" alt="Sorvetes Estudo">
        </a>
        <!-- os parâmetros width e height são para definir o tamanho -->
    </body>

</html>
```
## Span

O elemento HTML `<span>` é um conteiner generico em linha para conteúdo fraseado , que não representa nada por natureza. Ele pode ser usado para agrupar elementos para fins de estilo (usando os atributos class ou id ), ou para compartilhar valores de atributos como lang. Ele deve ser usado somente quando nenhum outro elemento semântico for apropriado. `<span>` é muito parecido com o elemento `<div>` , entretando  `<div>` é um elemento de nível de bloco enquanto `<span>` é um elemento em linha. Ex: 
```html
    <p><span>Some text</span></p>
```
## Criando favicom (icone na bara do navegador)

```html
<link rel="nomeOuDescrisao" href="Referencia da imagem" type="image/x-icon">
```
## Comentario em html

```HTML
<!-- comentario -->

```

## Identificadores

`<tag id="nome">` -> identificador de tag. so pode ser usada uma vez. Para link'ar se usa o `#`
`<tag class="nome">` -> identificador de tag. so pode ser usada varias vezes. Para link'ar se usa o `.`

## listas

- `<ul>` -> lista não ordenada
- `<ol>` -> lista ordenada
- `<li>` -> item de lista
Ex:
```html
<ul> <!-- Lista não ordenada -->
    <li>Item 1</li><!-- Item de lista -->
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<ol><!-- Lista ordenada -->
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ol>
```

## Tabelas

- `<table>` -> Tag de armazena a tabela
- `<tr>` -> Tag de linha da tabela
- `<th>` -> Tag de cabeçalho da tabela
- `<td>` -> Tag de Dados da tabela
Ex:
```html
<table><!-- Tabela -->
    <tr><!-- Linha -->
        <th>Nome</th><!-- Cabeçalho -->
        <th>Sobrenome</th>
    </tr>
    <tr>
        <td>Massaru</td><!-- Dados -->
        <td>Hagio</td>
    </tr>
</table>
```


## tags de formatação

Ps: de preferência para tags semânticas por terem utilidade para os navegadores.

### tags semânticas
- `<small>` -> texto pequeno
- `<strong>` -> texto em evidencia (mais importante)
- `<em>` -> texto em ênfase
- `<del>` -> texto deletado
- `<mark>` -> texto marcado
- `<ins>` -> texto instanciado ou inserido
- `<sub>` -> texto subscrito
- `<sup>` -> texto sobrescrito
- `<header>` -> Define um cabeçalho para um documento ou seção
- `<footer>` -> Define um rodapé para um documento ou seção
- `<main>` -> Especifica o conteúdo principal de um documento
- `<section>` -> Define uma seção em um documento
- `<article>` -> Define um artigo
- `<nav>` -> Define links de navegação

### tags não semânticas
- `<b>` -> negrito
- `<i>` -> itálico
- `<s>` -> texto riscado
- `<u>` -> sublinhado

## Formulários
### Syntax

![Criacao de formularios](https://www.w3schools.com/tags/tag_form.asp)

```html
<!-- Exemplo -->
<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

<!-- Tipos de tags para formularios -->
<input> <!-- entrada de dados -->
<textarea> <!-- tag define um controle de entrada de texto com várias linhas. -->
<button> <!-- tag define um botão clicável. -->
<select> <!-- O elemento é usado para criar uma lista suspensa. -->
<option> <!-- tag define uma opção em uma lista de seleção. -->
<optgroup> <!-- tag é usado para agrupar opções relacionadas em um elemento <select> -->
<fieldset> <!-- tag é usado para agrupar elementos relacionados em um formulário. -->
<label> <!-- tag define um rótulo para vários elementos -->
<output> <!-- tag é usado para representar o resultado de um cálculo (como um realizado por um script). -->




<form method="get|post">
<!-- GET -> Padrão. Acrescenta os dados do formulário ao URL em pares nome / valor: URL? Nome = valor & nome = valor -->
<!-- POST -> Envia os dados do formulário como uma transação HTTP post -->
<form action="URL">
<!-- ACTION -> Para onde enviar os dados do formulário quando o formulário for enviado -->
<input type="value">
<!-- O atributo type especifica o tipo de elemento <input> a ser exibido. -->
<!-- 
    text -> Padrão. Define um campo de texto de linha única
    submit -> Define um botão de envio
    password -> O <input type = "password"> define um campo de senha (os caracteres são mascarados).
    checkbox -> O <input type = "checkbox"> define uma caixa de seleção. A caixa de seleção é mostrada como uma caixa quadrada que é marcada (marcada) quando ativada. As caixas de seleção são usadas para permitir que um usuário selecione uma ou mais opções de um número limitado de escolhas.
 -->
<input name="text">
<!-- O atributo name especifica o nome de um elemento <input>. -->
<input type="text" placeholder="">
<!-- O atributo placeholder junto com type="text" mostra o valor dentro de "" na barra de texto enquanto esta em desfoque -->

<!-- Os diferentes tipos de entrada são os seguintes: -->
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text"> <!-- (default value) -->
<input type="time">
<input type="url">
<input type="week">
<!-- mais informacoes https://www.w3schools.com/tags/tag_input.asp -->

```
## Tag `<video>`

A tag `<video>` serve para anexar no documento HTML um arquivo de video. Declaramos o mesmo como qualquer tag, mas o que importa sao seus atributos.

Exemplos:

```html
<video controls width="250">

    <source src="/media/cc0-videos/flower.webm"
            type="video/webm">

    <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
```

- `<video src='url'>` -> O atributo `src` serve para indicarmos o arquivo de video que sera carregado.
- `<video width='LarguraEmPixel'>` -> Podemos tambem definir o tamanho usando `width` ou `heigth` para definir largura e altura do video.
- `<video controls>` -> Ao declarar na tag (sem atribuir um valor) ativamos os controles como play/pause, controle de volume que nem o youtube (so e parecido mas nao igual).
- `<video autoplay>` -> Ao carregar a pagina o video inicia sozinho. OBS: Em alguns navegadores esse atributo so funciona se o mesmo esta mutado declarando o atributo `muted`.
- `<video muted>` -> Deixa o video sem som.
- `<video loop>` -> Deixa o video em loop.
- `<video poster='URLdaImagem'>` -> Definimos uma tumbmail para o video.
- `<video preload='auto|metadata|none'>` -> Defini como o video deve ser carregado
    - `auto` -> Quando a pagina HTML for carregado, o video ja sera carregado na memoria no computador.
    - `metadata` -> Quando a pagina HTML for carregado, o video apenas carregara os metadados (os dados do video como o nome, tamanho e etc...).
    - `none` -> A pagina HTML -NÃO- sera carregara o vídeo. Apenas comecara esse processo quando o usuario der play no video.

## Tag `<audio>`

O elemento audio é utilizado para embutir conteúdo de som em um documento HTML

### Exemplos

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

### Atributos

- `autoplay` -> Um atributo Booleano; se especificado (mesmo se o valor for "false"!), o áudio iniciará automaticamente assim que possível sem parar de carregar os dados.
- `autobuffer` -> Um atributo Booleano; se especificado, o audio será baixado automaticamente, mesmo se não está configurado para reprodução automática. Isto continua até que o cache de mídia esteja cheio, ou até que o o arquivo de áudio completo tenha sido baixado, o que vier primeiro. Isto deve ser utilizado apenas quando é esperado que o usuário escolherá tocar o áudio; por exemplo, se o usuário navegou para a página utilizando um link "Reproduzir".  **Este atributo foi removido no Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) em razão do atributo preload.**
- `buffered` ->  Um atributo que pode ser lido para determinar os intervalos do áudio que já foram carregados. Este atributo contém um objeto TimeRanges (en-US).
- `controls` -> Se esse atributo estiver presente, o navegador oferecerá controles para permitir ao usuário controlar a reprodução do áudio, incluindo volume, navegação, e pausa/continuação da reprodução.
- `loop` -> Um atributo Booleano; se especificado, ao chegar no fim do áudio, ele voltará automaticamente para o começo.
- `muted` -> Um atributo Booleano que indica se o áudio será inicializado silenciado.
- `played` -> Um objeto que indica que todo o áudio foi reproduzido.
- `preload` -> Esse atributo enumerado pretende dar uma sugestão ao navegador sobre o que o autor pensa que proporcionará uma melhor experiência do usuário. Ele pode ter os seguintes valores:
    * `none` -> indica que o usuário não necessitará consultar o áudio ou que o servidor quer minimizar seu tráfego; em outros termos indica que o áudio não deve ser pré-carregado;
    * `metadata` -> indica que embora o usuário não necessitará consultar o áudio, pegar os meta-dados (ex: comprimento) é interessante;
    * `auto` -> indica que o usuário necessita ter prioridade; em outros termos isso significa que, se necessário, o áudio inteiro pode ser baixado, mesmo que não seja esperado a execução;
    * **Uma string vazia**: é um sinônimo do valor auto.
    Se não definido, seu valor padrão será definido pelo navegador (isto é, cada navegador pode escolher seu valor padrão), embora a especificação recomenda que seja definido para o metadata.

> ### Notas de uso:
> O atributo `autoplay` tem precedência sobre o `preload`,pois se é necessário executar o áudio automaticamente, o navegador obviamente o baixará. Definindo ambos `autoplay` e `preload` é permitido pela especificação.
> O navegador não é forçado pela especifição a seguir o valor desse atributo; é apenas uma sugestão.

- `src` -> A URL do áudio a ser incorporado. Isso é sujeito a HTTP access controls. Isto é opcional; ao invés disso você pode usar o elemento <source> dentro do bloco do áudio para especificar o vídeo a ser incorporado .
O tempo de compensação (time offset) entre o áudio e o vídeo está especificado como um valor de ponto flutuante (float) representando o número de segundos da compensação.

> **Nota:** A definição de valor de tempo de compensação ainda não foi completada na especificação do HTML 5 e está sujeita a mudança.


## Tag `<iframe>`

Essa tag serve para colocarmos um conteudo de alguma outro documento HTML, seja ele interno ou externo (podendo ser ate uma pagina da internet como [https://www.w3schools.com](https://www.w3schools.com)).

### Syntax

`<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>` -> `src` a fonte do documento e `title` o titulo do elemento.

### Mais exemplos

```html
    <iframe src="/default.asp" width="100%" height="300" style="border:1px solid black;"></iframe>

    <iframe src="/default.asp" width="100%" height="300" style="border:none;"></iframe>
```

podemos modificar o estilo com tag de altura (`height`) e largura (`width`), e tanbem usar a tag `style` modificando com CSS, ou ate modificando no proprio CSS.

  ## Canvas

A tag `<canvas>` é usada para desenhar gráficos, em tempo real, via script (geralmente JavaScript).

Exemplo:
```html
<canvas id="canvas" width="300" height="300">
    <!-- para que a tag funcione o width e height devem ser declarador -->
  Desculpe-me, seu navegador não suporta o elemento &lt;canvas&gt;.
</canvas>
```

[Continua no arquivo javascript_poo - Click aqui](./javascript_poo.md#Canvas)
