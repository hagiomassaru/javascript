# Anotações do curso ProgramadorBR 09/06/2021

# HTML

* `<extag>` - elemento html de abertura
* `</extag>` - elemento html de fechamento
Obs: `<extag>meu titulo</extag>` → os dois juntos formam um elemento html completo
* `<!DOCTYPE html>` - Indicador de versão do documento (versão Html5)
* `<meta>` - definir metadados
* `<meta charset="utf-8"` - atributo para definir metadados no formato **utf-8**
* Modelo básico de uma pagina index.html
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

* `<h1>` → titulo
* `<h2>` → subtítulo
* `<h3>` → sub-subtítulo em diante como `<h4>`, `<h5>` e etc...
* `<p>` → paragrafo
* `<div>` → dividir e agrupar elementos.
* `<br>` → quebra de linha
* `<a>` → ancoragem ou link. para indicar destino tem que usar o parâmetro `href="destino"`. Ex: 
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
* `<img>` → tag de imagem. Indicados o fonte da imagem pelo parâmetro `src` e o `alt` para caso a imagem não seja carregada haja uma alternativa. Ex:
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

## Identificadores

`<tag id="nome">` → identificador de tag. so pode ser usada uma vez. Para link'ar se usa o `#`
`<tag class="nome">` → identificador de tag. so pode ser usada varias vezes. Para link'ar se usa o `.`

## listas

* `<ul>` → lista não ordenada
* `<ol>` → lista ordenada
* `<li>` → item de lista
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

* `<table>` → Tag de armazena a tabela
* `<tr>` → Tag de linha da tabela
* `<th>` → Tag de cabeçalho da tabela
* `<td>` → Tag de Dados da tabela
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
* `<small>` → texto pequeno
* `<strong>` → texto em evidencia (mais importante)
* `<em>` → texto em ênfase
* `<del>` → texto deletado
* `<mark>` → texto marcado
* `<ins>` → texto instanciado ou inserido
* `<sub>` → texto subscrito
* `<sup>` → texto sobrescrito
* `<header>` → Define um cabeçalho para um documento ou seção
* `<footer>` → Define um rodapé para um documento ou seção
* `<main>` → Especifica o conteúdo principal de um documento
* `<section>` → Define uma seção em um documento
* `<article>` → Define um artigo
* `<nav>` → Define links de navegação

### tags não semânticas
* `<b>` → negrito
* `<i>` → itálico
* `<s>` → texto riscado
* `<u>` → sublinhado

## Formulários
### Syntax

```html
<form method="get|post">
<!-- GET → Padrão. Acrescenta os dados do formulário ao URL em pares nome / valor: URL? Nome = valor & nome = valor -->
<!-- POST → Envia os dados do formulário como uma transação HTTP post -->
<form action="URL">
<!-- ACTION → Para onde enviar os dados do formulário quando o formulário for enviado -->
<input type="value">
<!-- O atributo type especifica o tipo de elemento <input> a ser exibido. -->
<!-- 
    text → Padrão. Define um campo de texto de linha única
    submit → Define um botão de envio
    password → O <input type = "password"> define um campo de senha (os caracteres são mascarados).
    checkbox → O <input type = "checkbox"> define uma caixa de seleção. A caixa de seleção é mostrada como uma caixa quadrada que é marcada (marcada) quando ativada. As caixas de seleção são usadas para permitir que um usuário selecione uma ou mais opções de um número limitado de escolhas.
 -->
<input name="text">
<!-- O atributo name especifica o nome de um elemento <input>. -->


```

# CSS

## declaração

* CSS inline - declaração de css na tag utilizando propriedade `style`
```html
<!-- exemplo -->
<p style="color:red;"> texto </p>
```
* CSS interno - declaração de css no arquivo utilizando a tag `<style>`
```html
<!-- exemplo -->
<style>
    p{
        color:red;
    }
</style>
```
* CSS externo - declaração de css em outro arquivo utilizando a tag `<link>`
```html
<link href="arquivo_com_css.css" rel="stylesheet">
```

## Elementos background

```css
    /* adicionar imagem de funto */
    background-image: url(./images/rock-texture.jpg);
    /* definir repetição */
    background-repeat: no-repeat;
    /* definir tamanho */
    background-size: cover;
    /* comportamento de rolamento */
    background-attachment: fixed;
    
```
## Margem, preenchimento e borda
```css
    /* definir margem do elemento */
    margin: 10px; /* pode usar margin-top entre outros */
    /* definir o preenchimento do elemento */
    padding: 10px 10px; /* largura altura / pode usar padding-top entre outros */
    /* arredondamento dos cantos da borda */
    border-radius: 5px;
    /* borda  pontilhada*/
    border-style: dotted;
    /* borda tracejado */
    border-style: dashed;
    /* borda continua */
    border-style: solid;
    /* borda inexistente */
    border-style: none;
    /* borda invisível */
    border-style: hidden;
    /* definição de borda em uma linha só */
    border: 1px solid gray; /* tamanho / style / cor */

```
![exemplo](images/exemplo.png)

## Id e classes
```css
.algumacoisa{
    /* classe */
    /* são identificações que podem ser reutilizadas */
}
#algumacoisa{
    /* Id */
    /* são identificações que não podem ser reutilizadas */

}

```

```html
<tag id="algumacoisa">/progbr</tag>
<tag class="algumacoisa">/progrbr</tag>

```
## Formatação de link's
```css
link{
    /* formatação do link */
}
link:visited{
    /* formatação de link visitado */
}

```
## Ajustes no texto

```css
/* Cor de fonte */
color: red;
/* alinhamento de texto/elemento */
text-align: justify;
/* transformação de texto/elemento */
text-transform: capitalize;
/* Indentação do texto/elemento */
text-indent: 50px;
/* Decoração de texto8/elemento */
text-decoration: overline;
/* Espaço entre as letras */
letter-spacing: 2px;
/* Espaço entre as palavras */
word-spacing: 5px;
/* Espaço entre as linhas */
line-height: 2px;
/* Sombra do texto/elemento */
text-shadow: 1px 1px gray;
```

## Unidades medida fixas

* `cm` = centímetro
* `mm` = milímetro
* `in` = polegada
* `px` = pixel
* `pt` = ponto
* `pc` = picas

## Unidades medida relativa

* `em` = elemento herdara tamanho da fonte 'pai'
* `rem` = elemento herdara tamanho da fonte raiz (hedara o tamanho do body)
* `vw` = refere a largura da janela ex: `50vw` → equivale ao largura de 50% da janela.
* `vh` = refere a altura da janela ex: `50vh` → equivale ao altura de 50% da janela.
* `vmin` = refere a menor dimensão
* `vmax` = refere a maior dimensão
* `%` = sempre vai se referir ao tamanho do elemento pai.

## Elementos de fontes

```css
/* Familia fonte  */
font-family: 'Times New Roman', Times, serif;
/* Tipo de fonte */
font-style: italic;
/* Largura da Linha */
font-weight: 100;
/* Variante de fonte */
font-variant: small-caps;
/* tamanho da fonte */
font-size: 1.2rem;

```

### Fontes com serifa e sem serifa

![Com e Sem Serifa](images/com-sem-serifa.png)

### Fonte Monospace

![MonoSpace](images/mono_space.png)

## Elementos Lista

```css
/* Formatação dos pinos da lista (não ordenadas) */
list-style-type: none;/* Nenhum */
list-style-type: disk;/* Disco */   
list-style-type: circle;/* Circulo */
list-style-type: square;/* Quadrado */
/* Possição da pinagem */
list-style-position: inside; /* inside = dentro outside = fora*/
/* Definir imagem como pinagem */
list-style-image: url(./images/certo.png);

/* Formatação de pinos da lista (Ordenada) */
list-style-type: lower-roman;/* numero romanos minúsculo */
list-style-type: lower-alpha;/* numero alfa numérico minúsculo */
list-style-type: upper-roman;/* numero romanos maiúsculo */
list-style-type: upper-alpha;/* numero alfa numérico maiúsculo */
```

## Display

```css
/* Exibe um elemento como um elemento embutido (como <span>). Quaisquer propriedades de altura e largura não terão efeito */
display: inline;
/* Exibe um elemento como um elemento de bloco (como <p>). Ele começa em uma nova linha e ocupa toda a largura */
display: block;
/* Exibe um elemento como um contêiner de bloco de nível embutido. O próprio elemento é formatado como um elemento embutido, mas você pode aplicar valores de altura e largura */
display: inline-block;
/* O elemento foi completamente removido */
display: none;
```

## Overflow

Esta propriedade especifica se é necessário cortar o conteúdo ou adicionar barras de rolarem quando o conteúdo de um elemento é muito grande para caber em uma área especificada.
Nota: a `overflow` propriedade só funciona para elementos de bloco com uma altura especificada.

```css
div.ex1 {
  overflow: scroll;
  /* O estouro é cortado, mas uma barra de rolagem é adicionada para ver o resto do conteúdo */
}

div.ex2 {
  overflow: hidden;
  /* O estouro é cortado e o resto do conteúdo ficará invisível */
}

div.ex3 {
  overflow: auto;
  /* Se o estouro for cortado, uma barra de rolagem deve ser adicionada para ver o resto do conteúdo */
}

div.ex4 {
  overflow: visible;
  /* O estouro não é cortado. Ele é renderizado fora da caixa do elemento. Este é o padrão */
}

```

# Position

A propriedade `position` especifica o tipo de método de posicionamento usado para um elemento (static, relative, absolute, fixed, ou sticky).

## CSS Syntax
```css
position: static|absolute|fixed|relative|sticky|initial|inherit;
```
## Valores de propriedade

```css
div#myDIV {
    /* Valor padrão. Os elementos são renderizados em ordem, conforme aparecem no fluxo do documento */
    position:static;
}
div#myDIV {
    /* O elemento é posicionado em relação à sua posição normal, então "esquerda: 20px" adiciona 20 pixels à posição ESQUERDA do elemento */
    position:relative;
}
div#myDIV {
    /* O elemento é posicionado em relação ao primeiro elemento ancestral posicionado (não estático) */
    position:absolute;
}
div#myDIV {
    /* O elemento está posicionado em relação à janela do navegador */
    position:fixed;
}
div#myDIV {
    /* O elemento é posicionado com base na posição de rolagem do usuário. Um elemento aderente alterna entre 'relative' e 'fixed', dependendo da posição de rolagem. Ele é posicionado em relação até que uma determinada posição de deslocamento seja encontrada na janela de exibição - então, ele "se fixa" no lugar (como position:fixed). 
    
    Observação: não compatível com IE / Edge 15 ou anterior. Suportado no Safari a partir da versão 6.1 com um prefixo -webkit- */
    position: sticky;
    top: 0;
}
```

## Metodos para alteração de `position`

```css
div#myDIV {
    /* Define a borda da margem inferior para uma caixa posicionada */
    bottom: /*medidas*/;
    /* Clipes um elemento posicionado absolutamente */
    clip: /*medidas*/;
    /* Define a margem esquerda de uma caixa posicionada */
    left: /*medidas*/;
    /* Define a borda da margem direita para uma caixa posicionada */
    right: /*medidas*/;
    /* Define a borda da margem superior para uma caixa posicionada */
    top: /*medidas*/;
}
```

## Metodo Float

```css
div#myDIV {
    /* A propriedade float especifica se um elemento deve flutuar para a esquerda, direita ou não flutuar. */
    float: none|left|right|initial|inherit;
    /* A propriedade 'clear' controla o fluxo próximo aos elementos flutuantes. A propriedade 'clear' especifica o que deve acontecer com o elemento que está próximo a um elemento flutuante. Dica: Observe também a propriedade float. */
    clear: none|left|right|both|initial|inherit;
}

```
## Alinhamento de texto entre duas div's

 ```css
transform: translate(-50%, -50%);
/* comando acima deixa a div alinhada com a div pai */
/* exemplo abaixo */
.header{
    position: relative;
    margin: auto;
    width: 80%;
    height: 100px;
    background-color: gray;
}
.text{
    position: absolute;
    color: white;
    width: 70%;
    height: 70%;
    background-color: rgb(34, 37, 228);

    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);
}
 
 ```
## Responsividade
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Adicionando a meta tag acima, a pagina fica responsiva -->


```