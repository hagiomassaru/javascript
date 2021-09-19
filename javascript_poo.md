# Javascript Orientado a objeto

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

## Modificando Atributos e extraindo conteudo

- `document.getElementsByClassName("par")` -> Puxar conteudo de uma tag (ou varias) usando sua class.
- `document.getElementsByTagName("p")` -> Puxar o conteudo pelo nome de uma (ou varias) tag(s).
- `document.getElementsById("id")` -> Puxar o conteudo pelo nome de um `id`.

OBS: normalmente o resultado dos objetos `document.getElementsBy...` sao arrays (listas)

- `document.body.className` -> Extrai/Recebe nome da class da tag e possibilita modificacao atribuindo um outro valor.
- `document.body.style` -> Extrai/Recebe um conteudo html/tag e modifica/extrai o atributo `style`.
- `document.body.style.backgroundColor` -> Extrai/Recebe um atributo css e modifica/extrai o atributo `backgroudColor`.
OBS: `document.body.style` tem vario atributos que podemos mudar colocando `.document.body`, colsulte documentacao ou use o intellisense com `ctrl + espaco`
- `document.body.getAttribute('nomeAtributo')` -> Extrai (apenas) o conteudo do atributo indicado no `valorAtributo`.
- `document.body.setAttribute('nomeAtributo', 'valorAtributo')` -> Modifica(caso exista)/Cria(caso nao exista) o conteudo do atributo indicado no `valorAtributo`.

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
*/

```