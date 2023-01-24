# Firebase basico

## Conhecimentos uteis

Firebase e um serviço de banco de dados nao sql (nosgl) que funciona com base em coleções. Estas mesmas coleções se compõem principalmente de documentos que sao compostos por campos e valores (igual a objetos no JS).

```
colecao { documentos { campos:valores; } }
```

## O que e firebase?

Firebase e um serviço disponibilizado pela google para ajudar no desenvolvimento de aplicativos com Banco de dados, autenticação e etc.

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
// pode ver que para realizarmos essa referencia usamos o método firebase.firestore() e atribuímos a uma variável db

```

Depois acessar uma coleção, que no caso e a "TurmaA"

```js
db.collection("TurmaA").get()
// O .get e uma promised
```

Sendo o `.get()` uma promised, devemos usar o `.then()` e passar `callback` como argumento para manipular os dados que ele esta retornando.

```js
db.collection("TurmaA").get().then()
```
No caso iremos fazer um `snapshot` de nossos documentos, e para isso usamos essa mesma palavra (sendo que nao e regra, podemos usar qualquer nome) como argumento de uma **arrow function** 

```js
db.collection("TurmaA").get().then((snapshot)=>{})
```

Esse `snapshot` e o estado atual do documento, sendo o mesmo retornando um **array** que podemos usar os mesmos métodos de manipulação de arrays em JS. O principal que vamos usar e o `.forEach()` que serve para percorremos um array aplicando uma função para cada elemento.

```js
db.collection("TurmaA").get().then((snapshot)=>{
    snapshot.forEach();
})
```
A funcao que usaremos como argumento sera uma **arrow function** que iremos passar a variável **doc** como argumento (sendo que pode ser qualquer nome)

```js
db.collection("TurmaA").get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        console.log(doc);
    });
    
})
```

resultado:

![resultado](./images/2023-01-18_02-03.png)

> Como podemos ver pelos ID, retornamos os documentos.

Tendo em vista que agora temos acesso aos documentos do banco de dados firebase, podemos acessar os dados dos documentos usando o metodo `.data()` e assim retornando os dados em formato JSON.

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
retorna:

![retorno](./images/2023-01-23_03-01.png)
## Buscando dados 

Quando buscamos dados podemos utilizar o metodo `.where()` com tres parametros: campo buscado, condicao , valor buscado. EX

```js
db.collection(TURMA)
    .where(`nome`, `==`, `Marcos`)
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id);
        });
    });
```

como podemos ver eu busquei todos os documentos com o valor igual a "Marcos" no campo "nome" retornando o **id** de todos os documentos

![resultado](./images/2023-01-22_23-50.png)

## Criando e alterando documentos

Para criacao de manipulacao de documentos no firebase, iremos ver alguns métodos uteis para este fim.

1. **Criando documento novo**

    - `db.collection().add(objeto)` -> A funcao `.add()` recebera um **objeto js** que sera interpretado como uma documento no firebase, ja que sua estrutura e praticamente a mesma.

    ### Exemplo

    ```js

    db.collection(TURMA).add({
        nome:"Marcos",
        sobrenome: "Antonio",
        notas:{nota1:9.5,nota2:5}
    })

    ```

    - Resultado


    ![resultado](./images/2023-01-20_01-52.png)


    Lembrando que esse método também retorna um `promise` que pode ser tratado com `.then()` e `.catch()`

    ```js
    db.collection(TURMA).add({
        nome:"Marcos",
        sobrenome: "Antonio",
        notas:{nota1:9.5,nota2:5}
    }).then(doc=>{
        console.log("Documento criado com sucesso! ", doc);
    }).catch(err=>{
        console.log(err)
    })

    ```

2. **Criando documento novo e modificando seu ID**

    - `db.collection(TURMA).doc("NovoAluno").set(objeto)` -> Podemos ver que agora estamos usando a método `.doc()` passando como argumento  `"NovoAluno"` que sera o nome do documento. Ja o `.set()` serve para "setar" o conteúdo do documento, e esse conteúdo e passado como argumento em forma de objeto como ja fizemos anteriormente.

    ```js
    db.collection(TURMA).doc("NovoAluno").set({
            nome: "Marcos2",
            sobrenome: "Antonio2",
            notas: { nota1: 9.5, nota2: 5 },
        })
        .then((/* `.set()` nao retorna nenhum objeto nesse caso */) => {
            console.log("Documento criado com sucesso! ");
        })
        .catch((err) => {
            console.log(err);
        });

    ```
    - Resultado

    ![resultado](./images/2023-01-20_02-16.png)

    > OBS: temos que tomar cuidado pois `.set()` ele substitui as ultimas informações. Com isso abre margem para erro.

    Ex:

    ```js
    db.collection(TURMA).doc("NovoAluno").set({
                nome: "Marcos3"                
            })
            .then(() => {
                console.log("Documento criado com sucesso! ");
            })
            .catch((err) => {
                console.log(err);
            });

    ```

    = Resultado

    ![resultado](./images/2023-01-23_02-43.png)



    Como podemos ver ele nao mesclou os elemento, e sim criou um novo documento sobreescrevento e excluindo todos que nao condizem com o documento atual.

3. **Mesclando documentos**

    Caso queira mesclar os documentos de forma mais segura podemos colocar um novo objeto contendo `{merge:true}`.

    ```js
    db.collection(TURMA).doc("NovoAluno").set({
        sobrenome: "Antonio2",
        notas: { nota1: 9.5, nota2: 5 },
    },{merge:true}) //<- utilizando isso
    .then(() => {
        console.log("Documento criado com sucesso! ");
    })
    .catch((err) => {
        console.log(err);
    });

    ```
    - Resultado



    ![resultado](./images/2023-01-23_02-50.png)


    E tambem utilizar o metodo `.update()`

    ```js
    db.collection(TURMA).doc("NovoAluno").update({ //<--------
        apelido:"Fulano"
    })
    .then(() => {
        console.log("Documento criado com sucesso! ");
    })
    .catch((err) => {
        console.log(err);
    });

    ```

    - Resultado


    ![resultado](./images/2023-01-23_02-53.png)


    e caso queira modificar um campo `map` (que seria uma objeto dentro do documento firebase) podemos usar o `"notas.nota1" : 9`

    ```js
    db.collection(TURMA).doc("NovoAluno").update({ 
        "notas.nota1":10
    })
    .then(() => {
        console.log("Documento criado com sucesso! ");
    })
    .catch((err) => {
        console.log(err);
    });
    ```
    - Resultado


    ![resultado](./images/2023-01-23_02-56.png)


    e tambem caso queria incrementar um elemento em um `array` podemos utilizar `firebase.firestore.FieldValue.arrayUnion("elemento","elemento2")`
    
    ```js
    db.collection(TURMA).doc("NovoAluno").update({
        cidades: firebase.firestore.FieldValue.arrayUnion("d")
    })
    .then(() => {
        console.log("Documento criado com sucesso! ");
    })
    .catch((err) => {
        console.log(err);
    });

    ```
    e tambem caso queria remover um elemento em um `array` podemos utilizar `firebase.firestore.FieldValue.arrayRemove("elemento")`
        
    ```js
    db.collection(TURMA).doc("NovoAluno").update({
        cidades: firebase.firestore.FieldValue.arrayRemove("d")
    })
    .then(() => {
        console.log("Documento criado com sucesso! ");
    })
    .catch((err) => {
        console.log(err);
    });

    ```
    nao so isso, tambem podemos incrementar um numero com `firebase.firestore.FieldValue.increment("string ou numero")`.

## Vigiando alterações no firebase

No firebase poder "prestar atenção" em algum dados houve alguma alteração, e se houver a gente poder tratar isso.

Exemplo:

Abaixo usaremos uma funcao chamada `.onSnapshot()` para "vigiar" nosso banco de dados e caso tenha alguma alteracao ele executara o funcao que passaremos como **callback**

```js
db.collection("TurmaA").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        let aluno = doc.data();
        console.log(aluno);
    });
});

```

- Resultado


![resultado](./images/2023-01-24_23-16.png)

Como podemos ver o que eu fiz foi so mostrar todos os documentos junto como seus tados em formato `json`. Mas caso eu altere alguma coisa no firebase...

![resultado](./images/Peek%2024-01-2023%2023-18.gif)

O firebase executa a funcao novamente que eu ja havia escrito, como podemos ver acima.

> Lembrando que nao usamos o `.then()` porque esse métodos nao e uma `promised`.

Mas o codigo acima aplica o `onSnapshot()` na funcao inteira, podemos tambem aplicar somente em um documento especifico.

```js
let documentoRef = db.collection(TURMA).doc("NovoAluno");


documentoRef.onSnapshot(doc=>{
    let aluno = doc.data();
    console.log(aluno.nome);
})
```

- Resultado

![resultado](./images/2023-01-24_23-36.png)

No caso acima apenas "vigiaremos" o documento `"NovoAluno"` onde apenas as alterações no mesmo serão validas para execucao

![resultado](./images/Peek%2024-01-2023%2023-41.gif)

A imagem acima mostra que ao alterarmo o documento `"NovoAluno"` e impresso o campo `nome` do documento...

![resultado](./images/Peek%2024-01-2023%2023-45.gif)

Mas quando alteramos outro documento nada acontece.