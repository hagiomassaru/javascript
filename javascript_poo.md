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

- `document.body.innerHTML` -> Extrai/Recebe um html e Modificara o conteudo html do objeto respeitando as tags caso seja inseridas.
- `document.body.textContent` -> Extrai/Recebe um valor qualquer e Modificara o conteudo da tag do html referente oa objeto.
- `document.body.innerText` -> Extrai/Recebe um valor qualquer e Modificara o conteudo que e exibido na pagina/tela.

## Extraindo conteudo

- `document.getElementsByClassName("par")` -> Puxar conteudo de uma tag (ou varias) usando sua class.
- `document.getElementsByTagName("p")` -> Puxar o conteudo pelo nome de uma (ou varias) tag(s).
- `document.getElementsById("id")` -> Puxar o conteudo pelo nome de um `id`.


OBS: normalmente o resultado dos objetos `document.getElementsBy...` sao arrays (listas) e para estrair o html puro devemos fazer assim:

```JS
document.body.getElementsByTagName("nomeDaTag")[0]; // caso aja mais tag h1 pode verificar o array para ver qua e o que voce quer e indicar o indice.
```
Para realizarmos modificacoes no HTML via CSS3 temos que usar os elementos acima e atribuir a variaveis (e um dos jeitos)

```JS
p = document.getElementsById("id")[0];

```
## Modificando conteudo

A variavel `p` ao HTML extraido no ultimo topico, com ele extraido podemos realizar as modificacoes

- `p.className` -> Extrai/Recebe nome da class da tag e possibilita modificacao atribuindo um outro valor.
- `p.style` -> Extrai/Recebe um conteudo html/tag e modifica/extrai o atributo `style`.
- `p.style.backgroundColor` -> Extrai/Recebe um atributo css e modifica/extrai o atributo `backgroudColor`.
OBS: `p.style` tem vario atributos que podemos mudar colocando na variavel `p`, consulte documentacao ou use o intellisense com `ctrl + espaco`
- `p.getAttribute('nomeAtributo')` -> Extrai (apenas) o conteudo do atributo indicado no `valorAtributo`.
- `p.setAttribute('nomeAtributo', 'valorAtributo')` -> Modifica(caso exista)/Cria(caso nao exista) o conteudo do atributo indicado no `valorAtributo`.

## Eventos HTML

* `<tag onclick="codigoJS">` -> atributo que quando ao clicar executa o codigo no valor do atributo.
* `<tagDeEntradaDeTexto oncharge="codigoJS">` -> atributo que quando ao sair do foco executa o `"codigoJS"`.
* `<tagDeEntradaDeTexto oninput="codigoJS">` -> atributo que a cada letra digitada executa o `"codigoJS"`.
* `<tag onload="codigoJS">` -> atributo que executa o `"codigoJS"` apos a pagina HTML carregar.
* `<tag onmouseover="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
* `<tag onmouseout="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
* [Mais eventos](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Editando Eventos direto do javascrip

```JS
documentoOuTag = document.getElementById("id");
documentoOuTag.onclick = codigoOuFuncaoJS;// onclick mesma coisa que onclick so que direto no JS
documentoOuTag.addEventListener("EventoHTML", codigoOuFuncaoJS); /* "EventoHTML" podemos usar os eventos do HTML como : 
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

* `p.childrem` -> Extrai a tag filha do elemento HTML
* `p.parentElement` -> Extrai a tag pai do elemento HTML

