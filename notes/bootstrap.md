# Bootstrap
 
 Bootstrap e uma biblioteca composta por **classes** em CSS e **funções** em Javascript, que tem o objetivo de facilitar a criação de sites e interatividade usando apenas o HTML. 

 ## Instalação do Bootstrap

 [Bootstrap - Site official](https://getbootstrap.com)

 Para usarmos o bootstrap, podemos usar os arquivos que os criadores disponibilizam para download, ou linkar os arquivos no html do projeto.

- **Método com arquivos locais**

    1. Acessamos o site e clicamos na seção **Docs** (Ou algo parecido)

        ![Bootstrap](images/2023-02-07_03-03.png)
    
    2. Acessamos a pagina de **download** do arquivos do Bootstrap

        ![Bootstrap](images/2023-02-07_03-04.png)

    3. Na seção **Compiled CSS and JS** podemos ver o botão de download, dai so realizar o download

        ![Bootstrap](images/2023-02-07_03-05.png)

    4. Apos ter baixado o aquivo, so descompactar e colocar na pasta do projeto onde deseja implementar o bootstrap

        ![Bootstrap](images/2023-02-07_03-06.png)
        ![Bootstrap](images/2023-02-07_03-07.png)

    5. Segue um exemplo de como devemos linkar os arquivos no html

        ```html

        <!DOCTYPE html>
        <html lang="pt-br">

        <head>
            <meta charset="UTF-8">
            <title>Testando Firebase</title>
            <link rel="stylesheet" href="/css/style.css">
            <!-- Abaixo o link para o css do bootstrap -->
            <link rel="stylesheet" href="bootstrap-5.3.0-alpha1-dist/css/bootstrap.css">
        </head>

        <body>
            <!-- Linkamos tambe o Jquery pois o bootstrap utiliza ele amplamente -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
            <!-- Abaixo o link para o JS do bootstrap -->
            <script src="bootstrap-5.3.0-alpha1-dist/js/bootstrap.js"></script>
        </body>

        </html>

        ```

- **Método utilizando arquivos web**

    Para utilizar utilizar podemos linkar direto no HTML os endereços que a documentação no site disponibiliza.

    ```html
    <!DOCTYPE html>
    <html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <title>Testando Firebase</title>
        <link rel="stylesheet" href="/css/style.css">
        <!-- Abaixo o link web para o css do bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>

    <body>
        <!-- Linkamos tambe o Jquery pois o bootstrap utiliza ele amplamente -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <!-- Abaixo o link web para o JS do bootstrap junto com o popper (utilizado para fazer pop ups) -->
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    </body>

    </html>

    ```

    >OBS: Voce pode consultar a documentação, pois essa anotação pode estar desatualizada

# Como o bootstrap funciona?

O bootstrap funciona com o sistema de `classes` CSS e funções `JS` que sao declaradas através do HTML. Isso significa se seguirmos um das formas de [Instalação do Bootstrap](#instalação-do-bootstrap), trabalhemos apenas com o `HTML` declarando apenas classes que ja conterão configuraçoes pre-programada.

EX:

```html

<div class="text">Texto</div>

```

# Classes `CSS` utilizadas

## Bootstrap - Cores

```html
<div class="text-bg-primary p-3">Primary = Azul Escuro</div>
<div class="text-bg-secondary p-3">Secondary = Cinza</div>
<div class="text-bg-success p-3">Success = Verde</div>
<div class="text-bg-danger p-3">Danger = Vermelho</div>
<div class="text-bg-warning p-3">Warning = Amarelo</div>
<div class="text-bg-info p-3">Info = Azul Claro</div>
<div class="text-bg-light p-3">Light = Branco</div>
<div class="text-bg-white p-3">White = Branco</div>
<div class="text-bg-dark p-3">Dark = Preto</div>

```
Resultado:

![resultado](/notes/images/2023-02-08_01-46.png)

## Alguns tipos de elementos - Botão, Texto, Background e etc

```html
<div class="btn">Botão</div>
<div class="text">Texto</div>
<div class="bg-dark">Background Dark</div>


```
Resultado:

![resultado](/notes/images/2023-02-08_01-37.png)


## Bootstrap - Títulos e Display


```html
    <h1 class="display-1">Titulo Display 1</h1>
    <h2 class="display-2">Titulo Display 2</h2>
    <h3 class="display-3">Titulo Display 3</h3>
    <h4 class="display-4">Titulo Display 4</h4>
    <h1 >Titulo H1</h1>
    <h2 >Titulo H2</h2>
    <h3 >Titulo H3</h3>
    <h4 >Titulo H4</h4>

```
Resultado:

![resultado](/notes/images/2023-02-08_23-37.png)



```html
    <p class="h1">Titulo H1 com bootstrap</p>
    <p class="h2">Titulo H2 com bootstrap</p>
    <p class="h3">Titulo H3 com bootstrap</p>
    <p class="h4">Titulo H4 com bootstrap</p>

```

> * Podemos aplicar titulos `html` em qualquer elemento, mas nao tera peso semântico

Resultado:

![resultado](/notes/images/2023-02-08_23-39.png)

## Bootstrap - Padding e Margin

> A partir desse tópico evitarei de mostrar imagens para agilizar minhas anotações. Irei mostrar apenas html.


* Padding = `p-X` / *X pode ser de 0 ate 5*

    ```html
    <p class="bg-info p-1">Tamanho do padding 1</p>
    <p class="bg-info p-2">Tamanho do padding 2</p>
    <p class="bg-info p-3">Tamanho do padding 3</p>
    <p class="bg-info p-4">Tamanho do padding 4</p>
    <p class="bg-info p-5">Tamanho do padding 5</p>
    <!-- Sendo o p-0 sem padding -->
    ```


* Padding Start(Left), End(Right), Bottom e Top = `ps-X`, `pe-X`, `pb-X`, `pt-X`

    ```html
    <p class="bg-info ps-5">Tamanho 5, lado Start do padding </p>
    <p class="bg-info pe-5">Tamanho 5, lado End do padding </p>
    <p class="bg-info pb-5">Tamanho 5, lado Bottom do padding </p>
    <p class="bg-info pt-5">Tamanho 5, lado Top do padding </p>
    ```

    > A logica funciona em margin também...

* Padding Y (Vertical) e X(Horizontal) = `py-x` e `px-x`

    ```html
    <p class="bg-info py-3">Tamanho Vertical do padding</p>
    <p class="bg-info px-4">Tamanho Horizontal do padding</p>

    ```
* Padding auto = `p-auto` / *centraliza elementos como no `HTML`*

    ```HTML
    <p class="bg-info py-auto">Tamanho Vertical do padding</p>
    <p class="bg-info px-auto">Tamanho Horizontal do padding</p>
    ```

* Margin = `m-X` / *X pode ser de 0 ate 5*

    ```html
    <p class="bg-info m-1">Tamanho do margin 1</p>
    <p class="bg-info m-2">Tamanho do margin 2</p>
    <p class="bg-info m-3">Tamanho do margin 3</p>
    <p class="bg-info m-4">Tamanho do margin 4</p>
    <p class="bg-info m-5">Tamanho do margin 5</p>
    <!-- Sendo o m-0 sem margin -->
    ```

* Margin Start(Left), End(Right), Bottom e Top = `ms-X`, `me-X`, `mb-X`, `mt-X`

    ```html
    <p class="bg-info ms-5">Tamanho 5, lado Start do margin </p>
    <p class="bg-info me-5">Tamanho 5, lado End do margin </p>
    <p class="bg-info mb-5">Tamanho 5, lado Bottom do margin </p>
    <p class="bg-info mt-5">Tamanho 5, lado Top do margin </p>
    ```


* Margin Y (Vertical) e X(Horizontal) = `my-x` e `mx-x`

    ```html
    <p class="bg-info my-3">Tamanho Vertical do margin</p>
    <p class="bg-info mx-4">Tamanho Horizontal do margin</p>

    ```
* Margin auto = `m-auto` / *centraliza elementos como no `HTML`*

    ```HTML
    <p class="bg-info my-auto">Tamanho Vertical do Margin</p>
    <p class="bg-info mx-auto">Tamanho Horizontal do Margin</p>
    ```

# Bootstrap - Container

Containers servem para separarmos em blocos que de auto ajustam melhoram a responsividade da pagina

* Container = `container`

    ```html
    <div class="container">
        <h1>Lorem Ipsum</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et erat ultrices, tristique leo id, sagittis
            libero. Vivamus non porta sem. Pellentesque gravida libero id turpis elementum viverra. Praesent urna ex, luctus
            vitae mollis eu, euismod eget nunc. Sed posuere metus id augue semper porta. Morbi ultrices posuere dui, sed
            imperdiet tortor commodo volutpat. Phasellus pharetra volutpat libero eget pulvinar. Fusce eget molestie sapien.
            Sed quis semper risus, vel suscipit felis. Duis ultrices at velit id tincidunt.
        </p>
    </div>

    ```

    Exemplo aplicando a classe `container`:

    ![container](/notes/images/Peek%2009-02-2023%2000-51.gif)

    Exemplo nao aplicando:

    ![container](/notes/images/Peek%2009-02-2023%2000-53.gif)

# Bootstrap - Display + Float (CSS)

[Mais sobre a propriedade Display](./css.md#display)

[Mais sobre a propriedade Float](./css.md#metodo-float)

* Display Block = `d-block`
    
    ```HTML
    <p class="bg-info d-block">Display Block</p>
    ```
* Display Inline = `d-inline`
    
    ```HTML
    <p class="bg-info d-inline">Display Inline</p>
    ```
* Display float left e Right = `float-start` e `float-end`
    
    ```HTML
    <p class="bg-info float-star">float start/left</p>
    <p class="bg-info float-end">float end/right</p>
    ```

# Bootstrap - Responsividade

No bootstrap podemos adicionar um delimitador que faz que a classe so tenha um efeito caso tenha um determinado tamanho de tela. Esses delimitadores sao:

* `sm` -> small/576px
* `md` -> medium/768px
* `lg` -> large/992px
* `xl` -> xlarge/1200px

Nao sao todas classes que aceitam esse delimitadores, por esse motivo e bom consultar documentação.

Exemplo de uso:

```HTML
<p class="float-sm-star">float small start/left</p>
<p class="float-md-star">float medium start/left</p>
<p class="float-lg-star">float large start/left</p>
<p class="float-xl-star">float xlarge start/left</p>
```

# Bootstrap - Flexbox

A logica para usarmos flexbox no bootstrap e basicamente isso: `propriedade-valor`. Segue alguns propriedades em `flexbox` para `bootstrap`

## Display

* `display: flex;` = `d-flex`

## Flex-direction

- `flex-direction: row;` = `flex-row`
- `flex-direction: row-reverse;` = `flex-row-reverse`
- `flex-direction: column;` = `flex-column`
- `flex-direction: column-reverse;` = `flex-column-reverse`

## Justify-content

- `justify-content: flex-start` = `justify-content-start` 
- `justify-content: flex-end` = `justify-content-end` 
- `justify-content: center` = `justify-content-center` 
- `justify-content: between` = `justify-content-between` 
- `justify-content: around` = `justify-content-around` 
- `justify-content: evenly` = `justify-content-evenly`


## Align-items
- `align-items: flex-start` = `align-items-start`
- `align-items: flex-end` = `align-items-end`
- `align-items: center` = `align-items-center`
- `align-items: baseline` = `align-items-baseline`
- `align-items: stretch` = `align-items-stretch`

## Align-self

- `align-self: fles-start` = `align-self-start`
- `align-self: fles-end` = `align-self-end`
- `align-self: center` = `align-self-center`
- `align-self: baseline` = `align-self-baseline`
- `align-self: stretch` = `align-self-stretch`

## Flex-wrap

- `flex-wrap: nowrap` = `flex-nowrap`
- `flex-wrap: wrap` = `flex-wrap`

[Para saber mais como funciona o Flexbox no CSS. Click Aqui](./flex_box.md)

# Grid
[Para saber mais como funciona o Grid no CSS. Click Aqui](./grid.md)

> O grid e declarado junto com o flebox, mas nao e necessário utilizar o `d-flex`. Apenas declarando as linhas e colunas e tudo certo.
## Rows

- `grid-template-rows: auto;` = `rows`

## Columns

- `grid-template-columns: auto;` = `col`

## Base de 12 colunas

No Grid no bootstrap apesar de nos podermos colocar inúmeras colunas, o sistema de distribuição e com em 12 colunas. Exemplo:

```html
<div class="row">
        
    <div class="bg-info col-3">coluna1</div>
    <div class="bg-success col">coluna2</div>

</div>

```

no caso acima eu defini que a coluna um ocupara 3 (`col-3`) espaços. Levando em conta que o bootstrap se baseia com 12 espaços/colunas,ele deduzira que o valor da coluna2 sera de nove (`col-9`) ja que nao passei valor nenhum.

![resultado](./images/2023-02-17_01-23.png)

E caso eu passasse o seguinte:

```html
<div class="row">
        
    <div class="bg-info col-3">coluna1</div>
    <div class="bg-success col-3">coluna2</div>

</div>

```

Seria coluna 1 e 2 ocupando 3 espacos (`col-3`) que somados totalizam 6 colunas ocupadas. As outras 6 sao ocupadas por espaços vazios.

![resultado](./images/2023-02-17_01-30.png)

## Responsividade no grid

No grid podemos usar os parâmetros de [resposividade](#bootstrap---responsividade): `sm`, `md`, `lg` e `xl`
que terão o mesmo efeito no que ja foi dito.

```html
<div class="row">
        
    <div class="bg-info col-md-3">coluna1</div><!-- aplicando responsividade  -->
    <div class="bg-success col-3">coluna2</div>
    <div class="bg-info col-3">coluna1</div>
    <div class="bg-success col-3">coluna2</div>
    
</div>
```

Resultado:

![resultado](./images/Peek%2017-02-2023%2001-43.gif)

## Flexbox no Grid

Podemos utilizar elementos do flexbox no grid normalmente. Exemplo:

```html
<div class="row justify-content-between"><!-- aplicando flexbox  -->
    <div class="bg-info col-2">coluna1</div>
    <div class="bg-success col-2">coluna2</div>
</div>

<div class="row">
    <div class="bg-info col-3">coluna1</div>
    <div class="bg-success col-3">coluna2</div>
</div>

```

resultado:

![resultado](./images/2023-02-17_01-51.png)

# Bootstrap - Tipografia

## Peso de fontes


- `fw-bold` =  Negrito.

- `fw-bolder` =  Texto com peso em negrito (relativo ao elemento pai).

- `fw-semibold` =  Semi negrito.

- `fw-normal` =  Normal.

- `fw-light` =  Claro.

- `fw-lighter` =  Texto com peso Claro (relativo ao elemento pai).

- `fst-italic` =  Itálico.

- `fst-normal` =  Texto com fonte normal

## Formatação de texto


- `text-start` = Texto a esquerda

- `text-center` = Texto no centro

- `text-end` = Texto a direita

>obs: o texto justificado foi retirado no bootstrap, como usarmos teremos que usar manualmente com css puro `text-align: justify;`

- `font-monospace` = deixar o texto em monospace (font-padrão)

- `text-lowercase` = Texto em minusculo

- `text-uppercase` = Texto em maiúsculo

- `text-capitalize` = Texto capitalizado

- `text-decoration-none` = Texto sem decoração

- `list-unstyled` = Lista sem decoração

# Bootstrap - Tabelas

- `table` = Classe que formata a tabela no formato padrão do bootstrap. Muito mais bonito

![resultado](./images/Peek%2021-02-2023%2000-45.gif)

- `table-striped` = Tabela listrada

- `table-bordered` = Tabela com bordas

- `table-borderless` = Tabela sem bordas

- `table-hover` = Tabela com efeito ao passar o mouse em cima

- `table-dark` = Tabela com estilo Dark

> Esses estilos podem ser aplicados em linhas individuais

```html
<table class="table table-dark table-hover">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-success"> <!-- aplicando formatação em uma linha  -->
            <td>Massaru</td>
            <td>Hagio</td>
        </tr>
        <tr class="table-danger"> <!-- mesma coisa  -->
            <td>Yuuko</td>
            <td>Hagio</td>
        </tr>
    </tbody>
</table>

```

![resultado](./images/2023-02-21_01-08.png)

> Caso queira aplicar formatação no cabeçalho so substituir `table` por `thead` EX: `thead-dark` e `thead-light`

- `table-sm` = Tabela padding compacto

- `table-resposive` = Tabela responsiva (Quando nao puder aparecer os dados na janela, aparecera um scrolling na tela)

# Bootstrap - Alertas

- `alert` = Deixa em formato de alert

- `alert-danger` = Deixa no formado alert e na cor `danger` ([mais sobre cores click aqui!](#bootstrap---cores))

- `alert-link` = Link em formato de alerta

- `alert-dismissible` = Aparentamento nao faz nada, mas se voce criar um `button` e adicionar a propriedade `data-bs-dismiss='alert'`, caso o usuário click no botão o alerta sera fechado.

```html
<div class="alert alert-danger alert-dismissible">
        <button class="btn-close" data-bs-dismiss="alert"></button>
        este e o meu alerta
    </div>

```

![resultado](./images/Peek%2022-02-2023%2023-59.gif)

