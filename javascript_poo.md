# Javascript Orientado a objeto

[Voltar ao arquivo Javascrip](README.md)

## Objetos

- `window` -> Objeto principal que se refere a janela. Normalmente omitimos ele EX: `window.console.log()` = `console.log()`
- `console.log()` -> Metodo do objeto `window` que utilizamos com frequencia. Ele imprime um conteudo no console do navegador.
- `document` -> Metodo que extrai o documento html em que o script se encontra.
- `documento.body` -> Podemos puxar tags especificas como o `body` nesse caso
- `document.body.innerHTML` -> Converte o conteudo dentro do `body` em string.
- `document.getElementById("item1")` -> Puxar conteudo de uma tag usando seu id.
- `document.getElementsByClassName("par")` -> Puxar conteudo de uma tag (ou varias) usando sua class.
- `document.getElementsByTagName("p")` -> Puxar o conteudo pelo nome de uma (ou varias) tag(s).
OBS: normalmente o resultado dos objetos `document.getElementsBy...` sao arrays (listas)