const start=document.getElementById("start");
container=document.getElementById("griglia");

start.addEventListener("click", function() {
    generaSq(container, "div", "quadrato1")
    console.log("funziona")
});










// FUNZIONI

function generaSq (contenitore, elemento, classe) {
    for (let i = 0; i < 100; i++) {
        const square= document.createElement(elemento);
        square.classList.add(classe);
        contenitore.append(square);
        square.innerHTML = i+1;
        square.addEventListener("click", function() {
            console.log(i+1);
            square.classList.toggle("selected");
        })
    }
}

