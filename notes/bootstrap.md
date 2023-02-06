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

