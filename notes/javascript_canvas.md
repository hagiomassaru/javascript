# Canvas
- [Voltar ao arquivo Javascript POO](/javascript_poo.md)
- [Javascript](/javascript.md)
- [README.md](/README.md)


Canvas e uma **API** que serve para realizarmos desenhos e animacoes graficas via `javascript` e via `HTML`. Com ela podemos criar tambem Jogos, visualizacao de dados, manipulacao de fotos e processamento de video em tempo real.

Canvas foca amplamente em **2D** podendo usar **3D** atraves do **WebGl** que tambem trabalha tanto com **3D/2D**.

## Como canvas funciona?

primeiro nos declaramos uma tag `<canvas>` no HTML

```html
<canvas id="canvas" width='500' height='500'></canvas>
<!-- e recomentado atribuir um id como feito acima e definir largura e altura com propriedade weidth e height-->
```

O codigo acima apenas cria uma espaco em branco invisivel, podemos definir um estilo atraves do **CSS** para definir um tamanho e ate uma cor.


```html

<style>
.canvas{
    /* definindo cor */
    background-color: green;
    /* definindo largura e altura */
    width: 500px;
    height: 500px; /* Sendo que definir tamanho em css e diferente que definir usando as propriedades da tag <canvas> */
}
</style>

<canvas id="canvas" width='500' height='500'></canvas>

```

> **OBS:** Lembrando que podemos alterar o estilo pelo `javascript`.

Agora entraremos na parte do `javascript` comecando extraindo a tag **HTML** e atribuindo a uma variavel.

```javascript

let variavelCanvas = document.getElementById("canvas");

```

depois iremos extrair o "contexto" do elemento **canvas** atribuido na variavel `variavelCanvas` que foi declarada e extraida no **HTML** para podermos efetuar manipulacao.

```javascript
let ctx = tela.getContext("2d");
// O contexto foi colocado na variavel 'ctx'
```
 Como pode ver utilizamos o metodo `getContext` para realizarmos a extracao e tambem atribuimos string `"2d"` como propriedade, isso diz apenas que iremos realizar manipulacao graficas em **2D**, caso quisemos fazer mapulacaes em **3D** e so passar o memo como `"3d"`.

## Metodos para desenhar linhas

 Agora iremos apresentar alguns metodos para desenhar linhas.

- `ctx.moveTo(x, y);` -> Move o ponto inicial da manipulacao para a coordenados dos parametros **x** e **y**
- `ctx.lineTo(x, y);` -> Conecta o ultimo ponto declarado ate a coordenada declaradas nos parametro **x** e **y** criando uma linha.
- `ctx.lineWidth = valor;` -> Define a tamanho do contorno que sera criado 
- `ctx.fillStyle = 'green';` -> Define preencimento do desenho.
- `ctx.strokeStyle = "black"` -> Define a cor do contorno.
> OBS: Os metodos acima deve-se ser declarado antes do metodo `stroke`, caso contrario nao surtira efeito.
- `ctx.stroke();` -> Contorna nos conjuntos de linhas criados.

## Exemplo - Desenhando linhas

 ```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineTo(0, 0);
ctx.lineTo(0, 500);
ctx.lineTo(500, 500);
ctx.lineTo(500, 0);
ctx.lineWidth = 5;
ctx.stroke();
 ```
 ## Resultado

<img src='./images/resultado_canvas1.png' style='width=500px;height:500px'>

## Desenhando retangulo

Os proximos metodos que iremos utilizar servem para criarmos um retangulo com preenchimento.

Sendo esse metodos:

- `ctx.fillStyle = 'blue' ` -> Metodo para escolher a cor do preenchimento 
- `ctx.fillRect(x, y, width, height)` -> Metodo para definir o tamanho do preenchimento, sendo o `x` e `y` a margem desse preenchimento e `width` e `height` a largura e altura.
- `ctx.strokeStyle = 'red' ` -> Metodo para escolher a cor do contorno
- `ctx.strokeRect(x, y, width, height)` -> Metodo para definir as  do contorno, sendo o `x` e `y` a margem desse contorno e `width` e `height` a largura e altura
- `ctx.rect(x, y, width, height)` -> Definir as coordenadas apenas sendo o `x` e `y` a margem desse contorno e `width` e `height` a largura e altura.
- `ctx.clearRect(x, y, width, height)` -> Definir as coordenadas para limpeza apenas sendo o `x` e `y` a margem desse contorno e `width` e `height` a largura e altura.

## Exemplo 1 - Desenhando retangulo preenchido

```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.fillStyle = '#4d52ce';
ctx.fillRect(20,20,400,400);
```
## Resultado - Exemplo 1

<img src='./images/resultado_canvas3.png' style='width=500px;height=500px'>


## Exemplo 2 - Desenhando retangulo somente com contorno

```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.strokeStyle = '#4d52ce';
ctx.strokeRect(20,20,400,200);
```

## Resultado - Exemplo 2

<img src='./images/resultado_canvas4.png' style='width=500px;height=500px'>


## Exemplo 3 - Desenhando contorno com preenchimento

```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
// definindo coordenadas
ctx.rect(10,10,400,200);
// definindo cores do contorno e preenchimento
ctx.strokeStyle = '#4d52ce';
ctx.fillStyle = '#379494';
// ativando contorno e preenchimento
ctx.fill();
ctx.stroke();
```
## Resultado - Exemplo 3

<img src='./images/resultado_canvas5.png' style='width=500px;height=500px'>

> **OBS: Caso queira aumentar o tamanho das linhas voce pode usar o metodo `ctx.lineWidth = 5;` antes do `ctx.fill();` e `ctx.stroke();`.**
> **Deixando o codigo assim;**

```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.rect(10,10,400,200);
ctx.strokeStyle = '#4d52ce';
ctx.fillStyle = '#379494';
ctx.lineWidth = 5; // <- Aqui esta o metodo para aumentar o tamanho do contorno
ctx.fill();
ctx.stroke();
```
 > **Resultando em...**

<img src='./images/resultado_canvas6.png' style='width=500px;height=500px'>

## Exemplo 4 - Limpando desenho

```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.rect(10,10,400,200);
ctx.strokeStyle = '#4d52ce';
ctx.fillStyle = '#379494';
ctx.lineWidth = 5;
ctx.fill();
ctx.stroke();

ctx.clearRect(20,20,40,20);
```

## Resultado - Exemplo 4

<img src='./images/resultado_canvas7.png' style='width=500px;height=500px'>

# Criando novos caminhos ou formas no Canvas

Para iniciarmos uma nova linha/caminho ou adicionar formas, utilizarmos o metodo `ctx.beginPath`.

## Exemplo 1 - Criando novas linhas/caminhos ou formas
```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.lineWidth = 5;
ctx.moveTo(10,10);
ctx.strokeStyle = 'blue';
ctx.lineTo(200,400);
ctx.lineTo(200,200);
ctx.stroke();

ctx.beginPath(); // Criando nova linha

ctx.lineWidth = 5;
ctx.moveTo(10,10);
ctx.strokeStyle = 'red';
ctx.lineTo(100,400);
ctx.lineTo(100,200);
ctx.stroke();
```

## Resultado - Exemplo 1

<img src='./images/resultado_canvas8.png' style='width=500px;height=500px'>

Podemos tambem fechar automaticamente um conjunto de linhas que nao fecham um ciclo com o metodo `ctx.closePath();`
## Exemplo 2

```javascript
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.lineWidth = 5;
ctx.moveTo(10,10);
ctx.strokeStyle = 'blue';
ctx.lineTo(200,400);
ctx.lineTo(200,200);
ctx.closePath(); // Fecha elemento
ctx.stroke();

ctx.beginPath();

ctx.lineWidth = 5;
ctx.moveTo(10,10);
ctx.strokeStyle = 'red';
ctx.lineTo(100,400);
ctx.lineTo(100,200);
ctx.closePath(); // Fecha elemento
ctx.stroke();
```

## Resultado - Exemplo 2

<img src='./images/resultado_canvas9.png' style='width=500px;height=500px'>


# Desenhando um circulo

Para desenhar um circulo usamos o metodo `ctx.arc()` sendo seus parametros:
- `ctx.arc(x, y, raio, anguloInicial, anguloFinal [, antiHorario])`
    * **x** -> A coordenada horizontal do centro do arco.
    * **y** -> A coordenada vertical do centro do arco.
    * **raio** -> O raio do arco. Deve ser um valor positivo.
    * **anguloInicial** -> O ângulo em radianos em que o arco começa medido a partir do eixo x positivo.
    * **anguloFinal** -> O ângulo em que o arco finaliza medido a partir do eixo x positivo.
    > OBS: O angulo e definito em PiRadiano (unidade de medida de angulo) e para converter um numero nessa medida usamos a formula `X * Pi`. Um circulo mede 2 PiRadianos. Usando a formula seria `2 * 3.14(Pi)`.
    * **antiHorario** Optional -> Um Boolean opcional. Se verdadeiro, desenha o arco no sentido anti-horário entre os ângulos inicial e final. O padrão é falso (sentido horário).

> OBS: **Sim, todos os circulos no funco sao arcos.

## Exemplo 1 - Desenhando circulo
```javascript
let tela = document.getElementById("tela");

// Essa parte definimos os dados do parametros do metodo arc.
let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI; // Utilizando Piradianos para podermos utilizar a medida
// um circulo tem 2 PiRadianos

let ctx = tela.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';

// Metodo para criar o circula
ctx.arc(x,y,raio,inicio,fim);

ctx.fill();
ctx.stroke();
```

## Resultado - Exemplo 1

<img src='./images/resultado_canvas10.png' style='width=500px;height=500px'>

# Animacao com canvas

Animacao nao ha uma regra, mas o objetivo e o mesmo que seria que encontrar uma maneira de representar imagens em seguencia que dao a sensacao de animacao. As formar para chegar ao nosso objetivo podem ser lacos de repeticao, objetos ou metodos que possibilitem esse processo. No caso irei mostrar utilizando o metodo `setInterval` para representar exatamente o que estou falando.

## Exemplo - Animacao Basica
```javascript
let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

// Criando um objeto para facilitar a utilizacao e manipulacao
let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,
};

// Funcao responsavel para desenhar o circula
function drawCircle(c) {
    // Tudo nesse metodo esta nos topicos anteriores
    // Esse bloclo de codigo serve para quando comecar um desenho, ele apaga o anterior. Isso ajuda pois na animacao sem isso ela fica com rastro.
    ctx.beginPath();
    ctx.rect(0,0,500,500);
    ctx.fillStyle = "rgb(238, 240, 216)"
    ctx.fill();

    // Como podemos ver, mais uma linha criada no canvas.
    // Desenhando circulo
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim); // Utilizando o objeto `circle` para ter acesso as propriedades no mesmo e criar o circulo com o metodo `arc`

    ctx.fill();
    ctx.stroke();
}

// Ao inves de utilizar um laco de repeticao, preferi usar o metodo `setInterval` pois ela permite controlar o tempo dessa animacao
setInterval(function () {
    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 4;
    }

    drawCircle(circle);
}, 40);
```

## Resultado - Exercicio 1

<img src='./images/resultado_canvas11.gif' style='width=500px;height=500px'>

# Colocando imagens no Canvas

Para que possamos fazer esse feito (uma das formas e nao a unica) e preciso que a imagem esteja no documento **HTML** a puxemos no **Javascript**, assim podendo manusear essa imagem no **Canvas**. Para 'desenhar' a imagem utilizaremos o metodo abaixo:

- `ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);` -> O método referido da API Canvas 2D fornece diferentes maneiras de desenhar uma imagem na tela.
    * Parametros
        1. `image` -> An element to draw into the context. The specification permits any canvas image source (CanvasImageSource), specifically, a CSSImageValue, an HTMLImageElement, an SVGImageElement, an HTMLVideoElement, an HTMLCanvasElement, an ImageBitmap, or an OffscreenCanvas.

        2. `sx` **Optional** -> A coordenada do eixo x do canto superior esquerdo do sub-retângulo da imagem de origem para desenhar no contexto de destino. Use a sintaxe de 3 ou 5 argumentos para omitir esse argumento.

        3. `sy` **Optional** -> A coordenada do eixo y do canto superior esquerdo do sub-retângulo da imagem de origem para desenhar no contexto de destino. Use a sintaxe de 3 ou 5 argumentos para omitir esse argumento.

        4. `sWidth` **Optional** -> A largura do sub-retângulo da imagem de origem para desenhar no contexto de destino. Se não especificado, é usado o retângulo inteiro das coordenadas especificadas por sx e sy até o canto inferior direito da imagem. Use a sintaxe de 3 ou 5 argumentos para omitir esse argumento.

        6. `sHeight` **Optional** -> A altura do sub-retângulo da imagem de origem para desenhar no contexto de destino. Use a sintaxe de 3 ou 5 argumentos para omitir esse argumento.

        7. `dx` -> O eixo x coordena na tela de destino na qual colocar o canto superior esquerdo da imagem de origem.

        8. `dy` -> O eixo y coordena na tela de destino na qual colocar o canto superior esquerdo da imagem de origem.

        9. `dWidth` -> A largura para desenhar a imagem na tela de destino. Isso permite a escala da imagem desenhada. Se não especificado, a imagem não é dimensionada em largura quando desenhada. Observe que esse argumento não está incluído na sintaxe de 3 argumentos.

        10. `dHeight` -> A altura para desenhar a imagem na tela de destino. Isso permite a escala da imagem desenhada. Se não especificado, a imagem não é dimensionada em altura quando desenhada. Observe que esse argumento não está incluído na sintaxe de 3 argumentos.    

## Exemplo - Usando uma imagem no canvas

Primeiro colocar a imagem no documento **HTML**

```HTML
<img id="imagem" src="./img/1001tracklists.svg" style="display: none;">
<!-- Veja que apesar de declara ele e omitido com a propriedade 'display: none;' -->
```

Agora vamos para o **Javascript**

```javascript
let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");
// puxemos a imagem no documento HTML pelo 'id' atribuido
let imgcanvas = document.getElementById("imagem");
// Metodo para aparecer a imagem no canvas
ctx.drawImage(imgcanvas, 5, 5);
```

## Exemplo 2 - Usando uma imagem no canvas direto no javascript

```javascript
let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let imgcanvas = new Image(); // Criando um objeto para receber imagem
imgcanvas.src = "./img/1001tracklists.svg"; // Atribuindo o caminho da imagem

imgcanvas.onload = desenhandoImagem(); // Metodo onload usado e para sabermos quando a imagem parou de carregar, no caso e quando a funcao `desenhandoImagem()` for executada

function desenhandoImagem(){ // Criando o metodo que ira desenhar a imagem
    ctx.drawImage(this/* O metodo 'this' esta se referindo a variavel 'imgcanvas'*/, 5, 5);
}
```

## Extra - utilizando objeto `Image()` no JS

- `let img = new Image();` -> Criando um objeto para receber imagem
- `img.src = 'picture.jpg';` -> Atribuindo o caminho da imagem
- `img.naturalWidth` -> Retornar a largura original/natural da imagem
- `img.naturalHegth` -> Retornar a altura original/natural da imagem