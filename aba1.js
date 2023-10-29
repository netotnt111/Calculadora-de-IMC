const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")

function handleMouseWheel(event, input) {
    event.preventDefaut();
    const step = parseInt(input.getAttribute("step")) || 1;

    if (event.deltaY < 0) {
        // Rolar pra cima = adicionar
        input.stepUp(step);
    } else {
        // rolar pra baixo = remover
        input.stepDown(step);
    }
}

numero1.addEventListener("wheel", (event) => {
    if (numero1 === document.activeElement) {
        handleMouseWheel(event, numero1);
    }
});

numero2.addEventListener("wheel", (event) => {
    if (numero1 === document.activeElement) {
        handleMouseWheel(event, numero2);
    }
});