# Anotações front-end - Aprendendo Jquery

- [Voltar ao arquivo README.md](README.md)
- [Javascrip POO](javascript_poo.md)

# Introducao

Jquery e um framework em javascript para facilitar sua escrita;

# como usar?

Usamos o `$` como seletor de elementos.

```js
$("elemento_html")

```
E executar acoes podemos usar `arrow function` para executar eventos.

```js
$("elemento_html").hide(()=>{
    código
    })
    //podemos usar também qualquer tipo de função.
```

## Tipos de eventos

- `$("elemento_html").hide()` -> esconde elemento
- `$("elemento_html").show()` -> mostra elemento
- `$("elemento_html").click()` -> executa uma ação ao clicar no elemento.
- `$("elemento_html").mouseenter()` -> executa uma ação ao entrar no elemento com cursor.
- `$("elemento_html").mouseleave()` -> executa uma ação ao sair no elemento com cursor.
- `$("elemento_html").dblclick()` -> executa uma ação ao clicar duas vezes no elemento.

## Tipos de animacoes

- `$("elemento_html").fadeIn(time,opacidade)` -> transição `fadein`.
- `$("elemento_html").fadeOut(time,opacidade)` -> transição `fadeout`.
- `$("elemento_html").fadeToggle(time,opacidade)` -> transição `fadeToggle`.
- `$("elemento_html").slideUp(time,opacidade)` -> transição `slideUp`.
- `$("elemento_html").slideDown(time,opacidade)` -> transição `slideDown`.
- `$("elemento_html").animate(objeto,time)` -> transição `animacao personalizada` (objeto deve conter os elementos css que vc quer modificar).
- `$("elemento_html").stop()` -> evento para animação.

## Utilizando callback e encadeamento

quando queremos utilizar um evento ou animacao de pois de ter executado outra, usamos callback.

```js

$(elemento).hiden(2000,()=>{
    $(elemento).show()
})

```
