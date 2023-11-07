const start=document.getElementById("start");
container=document.getElementById("griglia");
let celle=50;

start.addEventListener("click", function() {
    const difficolta=document.getElementById("selettore").value
    if (difficolta=="dif1") {celle=100;}
    else if (difficolta=="dif2") {celle=81;}
    else if (difficolta=="dif3") {celle=49;}
    generaSq(container, "div", "quadrato", difficolta, celle)
});










// FUNZIONI

function generaSq (contenitore, elemento, classe1, classe2, celle) {
    for (let i = 0; i < celle; i++) {
        // crea elemento
        const square= document.createElement(elemento);
        // aggiunge classi
        square.classList.add(classe1);
        square.classList.add(classe2);
        // attacca nel DOM
        contenitore.append(square);
        // aggiunge scritta
        square.innerHTML = i+1;
        // aggiunge evento click
        square.addEventListener("click", function() {
            console.log(i+1);
            square.classList.toggle("selected");
        })
    }
}

