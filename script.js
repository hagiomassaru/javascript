let a = {
    nome: "fabio",
    idade: 26,
};
let b = JSON.stringify(a);
let c = JSON.parse(b);
console.log(a);
console.log(b);
console.log(c);
