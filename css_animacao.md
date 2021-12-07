 # Animacao com CSS

 A animacao em css e definida em tres pilares.
 - Criar a animacao
 - Indicar qual propriedade queremos modificar
 - Definir o tempo da animacao

 ## Criando animacao e indicando as propriedades

 Para criar animacao usamos o codigo abaixo.

 ```css
@keyframes Identificador {
    from{proprieda_a_ser_modificada} /* Inicio da animacao */
    to{proprieda_a_ser_modificada} /* Fim da animacao */
}
 ```

 **EX:**

 ```css
@keyframes changeColor {
    from{background-color: red;}
    to{background-color: blue;}
    
}
 ```

 ## Indicando duracao e atribuindo animacao

 Agora com a animacao criada podemos atribuir ela a um elemento css

 ```css
.box{
    width: 200px;
    height: 200px;
    border-style: solid;
    animation-name: Identificador; /* Atribuindo animacao */
    animation-duration: 3s; /* definindo tempo */
}

 ```

 ## Controle por porcentagem

Esse tipo de controle e muito util caso queremos ter maior autonomia ao cria animacoes. Isso possibilita utilizarmos modificar varias propriedades alem do que `from` e o `to`.

```css
@keyframes changeColor {
    0% {background-color: red;}
    25% {background-color: green;}
    50% {background-color: yellow;}
    75% {background-color: blueviolet;}
    100% {background-color: blue;}
    
}
```

e tambem podemos alterar mais de uma propriedade ao mesmo tempo ( o mesmo vale para `from` e `to`)

```css
@keyframes changeColor {
    0% {background-color: red;width: 200px;}
    25% {background-color: green;}
    50% {background-color: yellow;width: 800px;}
    75% {background-color: blueviolet;}
    100% {background-color: blue;width: 200px;}
    
}
```


