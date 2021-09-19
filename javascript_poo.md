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
OBS: normalmente o resultado dos objetos `document.getElementsBy...` sao arrays (listas)
- `algumaCoisa.className` -> Extrai/Recebe nome da class da tag e possibilita modificacao atribuindo um outro valor.
- `algumaCoisa.style` -> Extrai/Recebe um conteudo html/tag e modifica/extrai o atributo `style`.
- `algumaCoisa.style.backgroundColor` -> Extrai/Recebe um atributo css e modifica/extrai o atributo `backgroudColor`.
OBS: `algumaCoisa.style` tem vario atributos que podemos mudar colocando `.algumacoisa`, colsulte documentacao ou use o intellisense com `ctrl + espaco`
- `algumaCoisa.getAttribute('nomeAtributo')` -> Extrai (apenas) o conteudo do atributo indicado no `valorAtributo`.
- `algumaCoisa.setAttribute('nomeAtributo', 'valorAtributo')` -> Modifica(caso exista)/Cria(caso nao exista) o conteudo do atributo indicado no `valorAtributo`.

## Eventos HTML

* `<tag onclick="codigoJS">` -> atributo que quando ao clicar executa o codigo no valor do atributo.
* `<tagDeEntradaDeTexto oncharge="codigoJS">` -> atributo que quando ao sair do foco executa o `"codigoJS"`.
* `<tagDeEntradaDeTexto oninput="codigoJS">` -> atributo que a cada letra digitada executa o `"codigoJS"`.
* `<tag onload="codigoJS">` -> atributo que executa o `"codigoJS"` apos a pagina HTML carregar.
* `<tag onmouseover="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
* `<tag onmouseout="codigoJS">` -> atributo que executa o `"codigoJS"` quando o mouse passa em cima.
* [Mais eventos](https://www.w3schools.com/jsref/dom_obj_event.asp)