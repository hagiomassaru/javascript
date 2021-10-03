var nomes = ["massaru", "yuuko", "rogerio", "matias", "mario"];

function sortear() {
    let ns = nomes.length;
    let nst = Math.floor(Math.random() * ns);
    console.log(nst);
    document.getElementById("d").innerHTML = nomes[nst];
}
