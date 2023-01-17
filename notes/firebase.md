# Firebase basico

## Conhecimentos uteis

Firebase e um serviço de banco de dados nao sql (nosgl) que funciona com base em coleções. Estas mesmas coleções se compõem principalmente de documentos que sao compostos por campos e valores (igual a objetos no JS).

```
colecao > documentos > {
    campos:valores;
}
```

## O que e firebase?

Firebase e um serviço disponibilizado pela google para ajudar no desenvolvimento de aplicativos como Banco de dados, autenticação e etc.

[Site official](https://firebase.google.com)

>OBS: firebase passou por algumas mudancas. siga o link a seguir para te ajudar a prosseguir...
[Click aqui!](https://best-screw-ce8.notion.site/Tutorial-ProgramadorBR-428367c478fe4d9783de57a2abded76e)

## Conectando JS com Firebase

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
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    <!-- declarando script para gerenciar o projeto -->
    <script src="script.js"></script>
</body>

</html>

```


```js
// criando variavel com os dados de autenticacao ao firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8f9MFN8IIx5gRYcrPvyD2vqnxW0eGGWc",
    authDomain: "colegio-b1394.firebaseapp.com",
    projectId: "colegio-b1394",
    storageBucket: "colegio-b1394.appspot.com",
    messagingSenderId: "987707806043",
    appId: "1:987707806043:web:cf7f7d68812716366e8a7e",
    measurementId: "G-RFVW6DK03G",
};

//INICIALIZANDO FIREBASE
firebase.initializeApp(firebaseConfig);
// Corrigindo alguns problemas
firebase.firestore().settings({
    experimentalForceLongPolling: true,
    merge: true,
  });

```


### Lendo dados

Primeiramente precisamos referenciar nosso banco de dados no firestore. No caso abaixo atribuímos ele a uma variável.

```js
const db = firebase.firestore();
// pode ver que a para realizarmos essa referencia usamos o método firebase.firestore() e atribuímos a uma variável db

```

Depois acessar uma coleção, que no caso e a "TurmaA"

```js
db.collection("TurmaA").get()
// O .get e uma promised
```

Sendo o `.get()` uma promised, o que significa que devemos que usar o `.then()` e passar alguma funções como argumento para manipular os dados que ele esta retornando.

```js
db.collection("TurmaA").get().then()
```
No caso iremos fazer um `snapshot` de nossos documentos, e para isso usamos essa mesma palavra (sendo que nao e regra, podemos usar qualquer nome) como argumento de uma **arrow function** 

```js
db.collection("TurmaA").get().then((snapshot)=>{})
```

Esse `snapshot` e o estado atual do documento, sendo o mesmo igual a um **array** que podemos usar os mesmos métodos de manipulação de arrays em JS. O principal que vamos usar e o `.forEach()` que serve para percorremos um array aplicando uma função para cada elemento.

```js
db.collection("TurmaA").get().then((snapshot)=>{
    snapshot.forEach();
})
```
A funcao que usaremos como argumento sera uma **arrow function** que iremos passar a variável **doc** como argumento (sendo que pode ser qualquer nome)

```js
db.collection("TurmaA").get().then((snapshot)=>{
    snapshot.forEach(/*no caso a funcao de callback sera uma arrow function*/(doc)=>{
        console.log(doc);
    });
    
})
```

resultado:

![resultado](./images/2023-01-18_02-03.png)

> Como podemos ver pelos ID, retornamos os documentos.

Tendo em vista que agora temos acesso aos documentos do banco de dados firebase, podemos acessar os dados do documentos usando o metodo `.data()` e assim retornando os dados em formato JSON.

```js
db.collection("TurmaA").get().then(
    (snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });
```

retorna:

![retorno](./images/2023-01-18_02-16.png)


Obviamente esse método que usamos e para obter todos os documentos de uma coleção.

Caso queira acessar um documento diretamente usaremos o metodo `.doc()` no `.collection()` como referencia. EX

```js
// criamos a referencia mas com o metodo `.doc` e o ID do documento diretamente
let docRef = db.collection("TurmaA").doc("BrISS6tm4UBT2HY8DBLT");

docRef.get().then((doc)=>{
    let aluno = doc.data();
    console.log(aluno.nome);
})
```

