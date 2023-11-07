container=document.getElementById("griglia");
generaSq();







function generaSq () {
    for (let i = 0; i < 100; i++) {
        const square= document.createElement("div");
        square.classList.add("quadrato1");
        container.append(square);
        square.innerHTML = i+1;

    }

}

