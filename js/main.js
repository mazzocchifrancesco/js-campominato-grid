container=document.getElementById("griglia");
generaSq(container, "div", "quadrato1");










// FUNZIONI

function generaSq (contenitore, elemento, classe) {
    for (let i = 0; i < 100; i++) {
        const square= document.createElement(elemento);
        square.classList.add(classe);
        contenitore.append(square);
        square.innerHTML = i+1;

    }

}

