# FlexBox

Esse tipo de elemento serve para deixar os elementos 'flexiveis' o bastante para se adequarem ao tamanho do elemento pai. Na pratica estamos falando de um definir um estilo que se adequa a qualquer tamanho de tela.

## Definir a propriedade

```css
elementoPai{
    display: flex;
}
```

> Ao aplicas `display: flex;` em um elemento que tenha filhos, todos eles vao ter uma mudanca.
> Sendo assim podemos atraves do mesmo aplicar mudancas em todos os seus filhos.

## Flex-direction

Define como os itens flexíveis são colocados no contêiner flexível, definindo o eixo principal e a direção (normal ou invertido).

- `flex-direction: row;`
- `flex-direction: row-reverse;`
- `flex-direction: column;`
- `flex-direction: column-reverse;`


<img src='./images/flex/flex5.png' style='width:600px'>