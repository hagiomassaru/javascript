var numero = 0;
var intervalo;
function mudarCor() {
    let h = document.getElementsByTagName("h1")[0];
    h.style.color = "blue";
}
function mudarTexto() {
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;
}
function parar() {
    clearInterval(intervalo);
}

function mudar() {
    // let h = document.getElementsByTagName("h1")[0];
    // h.innerHTML = "Novo titulo";
    // setTimeout(mudarCor, 1000);
    intervalo = setInterval(mudarTexto, 1000);
}
