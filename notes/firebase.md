## [Voltar ao arquivo README.md](../README.md)
# Firebase básico

# Conhecimentos uteis

Firebase e um serviço de banco de dados nao sql (nosgl) que funciona com base em coleções. Estas mesmas coleções se compõem principalmente de documentos que sao compostos por campos e valores (igual a objetos no JS).

```
colecao { documentos { campos:valores; } }
```

# O que e firebase?

Firebase e um serviço disponibilizado pela google para ajudar no desenvolvimento de aplicativos com Banco de dados, autenticação e etc.

[Tutorial - Como importar o Firebase](./tutorial_como_import_firebase.md)

>OBS: firebase passou por algumas mudancas. siga o link a seguir para te ajudar a prosseguir...
[Click aqui!](https://best-screw-ce8.notion.site/Tutorial-ProgramadorBR-428367c478fe4d9783de57a2abded76e)

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


## Lendo dados

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
# Buscando dados 

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

# Criando e alterando documentos

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

# Vigiando alterações no firebase

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

Mas quando alteramos outro documento nada acontece. Pois o metodo de refere exclusivamente ao `"NovoAluno"`


# Excluindo dados no firebase

Para excluirmos usaremos o metodo `.delete()`, para excluir um campo usaremos o exemplo a seguir:



```js
db.collection(TURMA)
    .doc("NovoAluno")
    .update({
        apelido: firebase.firestore.FieldValue.delete()
    })
    .then(() => {
        console.log("Documento removido com sucesso! ");
    })
    .catch((err) => {
        console.log(err);
    });

```

- resultado

![resultado](./images/2023-01-25_20-40.png)

Usando o `firebase.firestore.FieldValue.delete()` em um campo ele deleta esse campo.

![resultado](./images/2023-01-25_20-42.png)

O mesmo vale para documentod

```js
db.collection(TURMA)
    .doc("NovoAluno")
    .delete()
    .then(() => {
        console.log("Documento removido com sucesso! ");
    })
    .catch((err) => {
        console.log(err);
    });

```

- Resultado

![resultado](./images/2023-01-25_20-49.png)


# Autenticação - gerenciando usuários

## Criando usuário

No firebase permite que gerenciemos usuários pelo próprio site ou através do próprio código. Nesse inicia iremos adicionar um usuário pelo site [Firebase.com](https://firebase.google.com/?hl=pt-br).

Na dashbord iremos ativar a tecnologia de autenticação


![resultado](./images/2023-01-27_00-03.png)
![resultado](./images/2023-01-27_00-03_1.png)
![resultado](./images/2023-01-27_00-04.png)
![resultado](./images/2023-01-27_00-05.png)
![resultado](./images/2023-01-27_00-05_1.png)
![resultado](./images/2023-01-27_00-07.png)
![resultado](./images/2023-01-27_00-07_1.png)

> Lembrando que a senha tem que ser mais de 6 numeros

![resultado](./images/2023-01-27_00-08.png)

Pronto! criamos um usuário. Mas agora iremos criar um usuário via javascript. 
- Segue o script que iremos usar...
```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Testando Firebase</title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

<body>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <!-- link abaixo ativa o suporte a autenticação firebase no script  -->
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    <script src="js/script.js"></script>
</body>

</html>
```

```js
let auth = firebase.auth();

let userEmail = "novousuario@teste.com";
let pass = "123";

auth.createUserWithEmailAndPassword(userEmail, pass)
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log(err);
    });

```

Como podemos ver, foi adicionado no arquivo `html` a tag `<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>` que adiciona o suporte a autenticação firebase a pagina. Depois no script `javascript` atribuímos o `firebase.auth()` na variável `auth` para facilitar nossa vida na utilização dos métodos, e depois, adicionamos mais duas variaves com os dados para autenticação. Também usamos o metodo `.createUserWithEmailAndPassword(userEmail, pass)` na variável `auth` passando as variáveis anteriores com parâmetros para criação do usuário.
Ao terminar vemos que esse metodo retorna uma promised que tratamos os dados para mostrar no console.

**Retornando**

![resultado](./images/2023-01-27_00-39.png)

como podemos ver a senha esta muito fraca, tem que ter mais dígitos

**correção**

```js
let auth = firebase.auth();

let userEmail = "novousuarioteste.com"; //??
let pass = "123abc"; // adicionado mais caractere

auth.createUserWithEmailAndPassword(userEmail, pass)
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log(err);
    });
```
**Retornando**

![resultado](./images/2023-01-27_00-53.png)

Agora o email que esta mal formatado


**correção 2**

```js
let auth = firebase.auth();

let userEmail = "novousuario@teste.com"; // corrigido
let pass = "123abc"; 

auth.createUserWithEmailAndPassword(userEmail, pass)
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log(err);
    });
```
**Retornando**

![resultado](./images/2023-01-27_01-00.png)
![resultado](./images/2023-01-27_01-02.png)

Agora esta tudo certo!

## Verificando login

Para realizar a verificação de login usaremos o metodo `.currentUser`.,

```js
let user = auth.currentUser;

console.log(user);
```
**Resultado**

![resultado](./images/2023-02-01_01-48.png)


## Login


Como podemos ver, apesar de termos criado um usuario, nao logamos com o mesmo. Para isso usaremos o metodo `.singnInWithEmailAndPassword(userEmail,pass);`.

```js
    auth.singnInWithEmailAndPassword(userEmail, pass)
        .then((loggedUser) => {
            console.log(loggedUser);
        })
        .catch((err) => {
            console.log(err);
        });

    let user = auth.currentUser;

    console.log(user);
```

**Resultado**

![resultado](./images/2023-02-01_01-56.png)
![resultado](./images/2023-02-01_01-56_1.png)

> Caso o arquivo javascript for recarregado o usuário deixara de estar logado e voltara o retornar `null`.

Para Resolver esse problema iremos usar o metodo `.onAuthStateChanged(callback)` para monitorar o estado de nosso usuário, e criar uma condição que caso esteja logado ira nos retornar as informações do usuário e caso nao esteja logo retornara uma mensagem de **Ninguém logado**.

```js
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
    } else {
        console.log("Ninguém Logado");
    }
});

```

**Resultado**

![resultado](./images/2023-02-01_02-09.png)

Agora toda vez que o estado do usuário mudar esse metodo ira dispara como o status atual do usuário.


## logoff


Para realizarmos **logoff** do usuário utilizaremos o metodo `.sighOut()`.

```js
auth.signOut()
        .then(() => {
            console.log("Usuário deslogado");
        })
        .catch((err) => {
            console.log(err);
        });

```

**Resultado**

![resultado](./images/2023-02-01_02-19.png)

> A mensagem `Ninguém logado` e referente ao metodo `.onAuthStateChanged(callback)` que monitora o status do usuário. Que agora se encontra deslogado.

## Persistência de login

Persistência de login serve para definirmos o quanto tempo uma sessão deve se manter. Para isso usamos alguns métodos...

- `auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)` => E o metodo padrão, ele mantém o usuário logado ate realizar o logoff.

**Exemplo:**

```js

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            auth.signInWithEmailAndPassword(userEmail, pass)
                .then((loggedUser) => {
                    console.log(auth.currentUser);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });

```

- `auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)` => Esse metodo, mantém o usuário logado apenas na "aba" em que foi realizado login.

**Exemplo:**

```js

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            auth.signInWithEmailAndPassword(userEmail, pass)
                .then((loggedUser) => {
                    console.log(auth.currentUser);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });

```
- `auth.setPersistence(firebase.auth.Auth.Persistence.NONE)` => Esse metodo, mantém o usuário logado apenas na realização do login, realizando logoff imediatamente.

**Exemplo:**

```js

auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
        .then(() => {
            auth.signInWithEmailAndPassword(userEmail, pass)
                .then((loggedUser) => {
                    console.log(auth.currentUser);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });

```

# Regras

Regras servem para definirmos condições de acesso ao banco de dados.

Caso tenha escolhido um banco de dados aberto, que pode ser alterado por qualquer um. Ele estara assim...

**Exemplo:**

![regras](/notes/images/2023-02-03_03-08.png)