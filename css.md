
# CSS

## [voltar para o javascript](README.md)

## Tipos de declaração em CSS

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

## Trocando a cor e modificando o plano de fundo de um Elemento HTML - background

```css
    background-image: url('URL')|none|initial|inherit;/* adicionar imagem de funto // 
    * url ('URL') -> O URL da imagem. Para especificar mais de uma imagem, separe os URLs com uma vírgula
    * none -> Nenhuma imagem de plano de fundo será exibida. Isso é padrão
    * initial -> Define essa propriedade para o seu valor padrão https://www.w3schools.com/cssref/css_initial.asp
    * inherit -> Herdará essa propriedade do seu elemento pai https://www.w3schools.com/cssref/css_inherit.asp    
    */    
    background-repeat: no-repeat;/* definir repetição */
    
    background-size: cover;/* definir tamanho */
    
    background-attachment: fixed;/* comportamento de rolamento */
    
```
## Margem - margin
```css
    /* definir margem do elemento */
    margin: 10px (comprimento)|auto|initial|inherit; /* pode usar margin-top entre outros
    * auto -> O navegador calcula uma margem
    * initial -> Define essa propriedade para o seu valor padrão https://www.w3schools.com/cssref/css_initial.asp
    * inherit -> Herdará essa propriedade do seu elemento pai https://www.w3schools.com/cssref/css_inherit.asp    
    * Todos os elementos margin usam as propriedades acima.
    */
    margin-bottom: initial; /* Define a margem inferior de um elemento */
    margin-left: inherit; /* Define a margem esquerda de um elemento */
    margin-right: auto; /* Define a margem direita de um elemento */
    margin-top: 20px; /* Define a margem superior de um elemento */
    
    
```
## Preenchimento - padding
```css
    /* definir o preenchimento do elemento */
    padding: 10px 5px 15px 20px; /* Se a propriedade de padding tiver quatro valores
    * O preenchimento superior é 10px
    * O preenchimento direito é 5px
    * O preenchimento inferior é de 15px
    * O preenchimento esquerdo é de 20px
    */
    padding: 10px 5px 15px;/* Se a propriedade de padding tiver três valores
    * O preenchimento superior é 10px
    * O preenchimento direito e esquerdo são 5px
    * O preenchimento inferior é de 15px
    */
    padding: 10px 5px 15px;/* Se a propriedade de padding tiver dois valores
    * O preenchimento superior e inferior são 10px
    * O preenchimento direito e esquerdo são 5px
    */
    padding: 10px; /* Se a propriedade de padding tiver um valor
    * todos os quatro preenchimento são 10px
    */
    padding-bottom: length(comprimento)|initial|inherit; /* essas propriedades sao bem parecidas com margin */
    padding-left: length(comprimento)|initial|inherit;
    padding-right: length(comprimento)|initial|inherit;
    padding-top: length(comprimento)|initial|inherit;    

```
## Borda - border

```css
    /* arredondamento dos cantos da borda */
    border-radius: 5px; /* borda  pontilhada*/
    border-style: dotted;/* borda tracejado */
    border-style: dashed;/* borda continua */
    border-style: solid;/* borda inexistente */
    border-style: none;/* borda invisível */
    border-style: hidden;/* definição de borda em uma linha só */
    border: 1px solid gray;/* tamanho / style / cor */

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

color: red;/* Cor de fonte */

text-align: auto|left|right|center|justify|start|end|initial|inherit;/* alinhamento de texto/elemento
* auto -> Valor padrão. A última linha é justificada e alinhada à esquerda	
* left -> A última linha está alinhada à esquerda	
* right -> A última linha está alinhada à direita	
* center -> A última linha está alinhada no centro	
* justify -> A última linha é justificada como o resto das linhas	
* start -> A última linha está alinhada no início da linha (esquerda se a direção do texto for esquerda para direita e direita a direção do texto for direita para esquerda)	
* end -> A última linha está alinhada no final da linha (à direita, se a direção do texto for da esquerda para a direita e a esquerda for a direção do texto da direita para a esquerda)	
* initial -> Define essa propriedade para o seu valor padrão.	
* inherit -> Herdará essa propriedade do seu elemento pai.
*/

text-transform: none|capitalize|uppercase|lowercase|initial|inherit;/* transformação de texto/elemento 
* none -> Sem capitalização. O texto é renderizado como está. Isso é padrão	
* capitalize -> Transforma o primeiro caractere de cada palavra para maiúsculas	
* uppercase -> Transforma todos os caracteres para maiúsculas	
* lowercase -> Transforma todos os caracteres para minúsculas	
* initial -> Define essa propriedade para o seu valor padrão.	
* inherit -> Herdeira essa propriedade do seu elemento pai.
*/

text-indent: 50px;/* Indentação do texto/elemento */

text-decoration: text-decoration-line text-decoration-color text-decoration-style|initial|inherit;/* Decoração de texto/elemento */

text-decoration-line: none|underline|overline|line-through|initial|inherit;/* 
O text-decoration-line propriedade define o tipo de decoração de texto a ser usada

* none -> Valor padrão. Não especifica nenhuma linha para a decoração do texto	
* underline -> Especifica que uma linha será exibida no texto	
* overline -> Especifica que uma linha será exibida sobre o texto	
* line-through -> Especifica que uma linha será exibida através do texto	
* initial -> Define essa propriedade para o seu valor padrão.
* inherit -> Herdará essa propriedade do seu elemento pai.

*/

text-decoration-color: color|initial|inherit;/*
A propriedade text-decoration-color especifica a cor da decoração do texto
*/

text-decoration-style: solid|double|dotted|dashed|wavy|initial|inherit;/*
A propriedade text-decoration-style define o estilo da decoração do texto

* solid -> Valor padrão. A linha será exibida como uma única linha	
* double -> A linha será exibida como uma linha dupla	
* dotted -> A linha será exibida como uma linha pontilhada	
* dashed -> A linha será exibida como uma linha tracejada	
* wavy -> A linha será exibida como uma linha ondulada	
* initial -> Define essa propriedade para o seu valor padrão. Leia sobre inicial	
* inherit -> Herdará essa propriedade do seu elemento pai. Leia sobre herdar

*/

letter-spacing: 2px;/* Espaço entre as letras */

word-spacing: 5px;/* Espaço entre as palavras */

line-height: 2px;/* Espaço entre as linhas */

text-shadow: 1px 1px gray;/* Sombra do texto/elemento */
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

## Position

A propriedade `position` especifica o tipo de método de posicionamento usado para um elemento (static, relative, absolute, fixed, ou sticky).

### CSS Syntax
```css
position: static|absolute|fixed|relative|sticky|initial|inherit;
```
### Valores de propriedade

![Exemplo de position](images/css-positioning.png)
![Exemplo2 de position](images/css-positioning2.png)

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

### Metodos para alteração de `position`

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
    background-color: #fff;

    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);
}
 
 ```

## Alinhando elementos

[Videos de referencia](https://www.youtube.com/watch?v=Cu-HP-gvggg)

[Praticar o funcionamento de flexbox](https://flexboxfroggy.com)

Para centralizar ou alinhar elementos existem varios metodos. Um deles e :

```css
div#myDIV {
    margin: auto; /* para definir 'div' podemos usar 'margin' com proprieda 'auto' assim deixando centralizado */
}
div#myDIV {
    margin-left: auto; /* dessa maneira alinhamos a `div` a direita */
    /* ja podemos imaginar como alinhar elemento para esquerda nao e ?*/
}
img#myImg {
    /* Para imagens o metodo acima nao funciona, para contornar isso mudamos o 'display' para 'block' */
    display: block;
    margin: auto; 
}
```
OBS: O metodo acima so funciona se o elemento for `display: block;`

podemos tambem alinhar uma `img` colocando dentro de uma `div`

### * HTML
```html
<div id='myImg'>
    <img src='imagem' alt='imagem'>
<div>
```
### * CSS
```css
#myImg {
    text-align: center; /* assim a imagem ficara alinhada */
}
```
como podemos ver se uma imagem estivem dentro de uma `div` podemos alinhar usando `text-align:` no CSS

## Responsividade
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Adicionando a meta tag acima, a pagina fica responsiva -->

```

## Media Queries

Sintax:
```css
@media screen and (max-width: 400px/* A largura máxima da área de exibição, como uma janela do navegador */) {
    /* alguma coisa */
    /*caso ultrapasse o valor 'max-width' esse bloco de codigo e executado*/
}
@media screen and (min-width: 400px/* A largura mínima da área de exibição, como uma janela do navegador */) {
    
    /* alguma coisa */
    /*caso nao ultrapasse o valor 'min-width' este bloco de codigo e executado*/
}
```
para mais informacoes [Click aqui](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)