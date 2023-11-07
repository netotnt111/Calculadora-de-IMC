const comprimento = document.getElementById("comprimento");
const largura = document.getElementById("largura");

function handleMouseWheel(event, input) {
    event.preventDefaut();
    const step = parseInt(input.getAttribute("step")) || 1;

    if (event.deltaY < 0) {
        input.stepUp(step);
    } else {
        input.stepDown(step);
    }
}

comprimento.addEventListener("wheel", (event) => {
    if (comprimento === document.activeElement) {
        handleMouseWheel(event, comprimento);
    }
});

largura.addEventListener("wheel", (event) => {
    if (largura === document.activeElement) {
        handleMouseWheel(event, largura);
    }
});

function calcularArea() {
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const largura = parseFloat(document.getElementById("largura").value);

        if (!isNaN(comprimento) && !isNaN(largura)) {
            const area = comprimento * largura;
            document.getElementById("resultadoArea").textContent = "A área do quadrado é: " + area + " cm²";
        } else {
            document.getElementById("resultadoArea").textContent = "Por favor, insira números válidos!";
        }
    }

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calcularArea();
    }
});