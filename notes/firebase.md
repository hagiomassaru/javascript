# Firebase basico

## O que e firebase?

Firebase e um serviço disponibilizado pela google para ajudar no desenvolvimento de aplicativos como Banco de dados, autenticação e etc.

[Site official](https://firebase.google.com)

## Como usar?

### 1. Criar uma conta

Para se criar uma conta nao tem segredo, acessar o site e seguis os passos abaixo:

![primeiro passo](images/2023-01-04_18-26.png)

![segundo passo](images/2023-01-04_18-27.png)

A partir da imagem abaixo podemos gerenciar nosso projetos

![alt](images/2023-01-04_18-29.png)

# Conectando JS com Firebase

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Testando Firebase</title>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <!-- Declarando o script com os comando firebase -->
    <script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"></script>
    <!-- declarando script para gerenciar o projeto -->
    <script src="script.js"></script>
</body>

</html>

```


```js
// criando variavel com os dados de autenticacao ao firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8f9MFN8IIx5gRYcrPvyD2vqnxW0eGGWc",
    authDomain: "dominio do projeto",
    projectId: "nome do projeto",
    storageBucket: "nome do projeto.appspot.com",
    messagingSenderId: "987707806043",
    appId: "1:987707806043:web:cf7f7d68812716366e8a7e",
    measurementId: "G-RFVW6DK03G",
};
// Iniciamos o firebase
firebase.initializeApp(firebaseConfig);

```


### Gerenciando dados








