# Anotações do curso ProgramadorBR 09/06/2021

## [voltar para o javascript](README.md)
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

## Comentario em html

```HTML
<!-- comentario -->

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
<input type="text" placeholder="">
<!-- O atributo placeholder junto com type="text" mostra o valor dentro de "" na barra de texto enquanto esta em desfoque -->


```
