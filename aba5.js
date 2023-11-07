const base = document.getElementById("base");
const largTri = document.getElementById("largura-tri");

function handleMouseWheel(event, input) {
    event.preventDefaut();
    const step = parseInt(input.getAttribute("step")) || 1;

    if (event.deltaY < 0) {
        input.stepUp(step);
    } else {
        input.stepDown(step);
    }
}

base.addEventListener("wheel", (event) => {
    if (base === document.activeElement) {
        handleMouseWheel(event, base);
    }
});

largTri.addEventListener("wheel", (event) => {
    if (largura === document.activeElement) {
        handleMouseWheel(event, largTri);
    }
});

function calcularTri() {    
    const base = parseFloat(document.getElementById("base").value);
    const largTri = parseFloat(document.getElementById("largura-tri").value);
    
        if (!isNaN(base) && !isNaN(largTri)) {
            const areaTri = (base * largTri) / 2;
            document.getElementById("resultadoTri").textContent = "A área do triângulo é: " + areaTri + " cm²";
        } else {
            document.getElementById("resultadoTri").textContent = "Por favor, insira números válidos!";
        }
    }

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    calcularTri();
    }
});