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
    if (numero2 === document.activeElement) {
        handleMouseWheel(event, numero2);
    }
});

function calcularDIV() {
    const numero1 = parseFloat(document.getElementById("numero1").value) || 0;
    const numero2 = parseFloat(document.getElementById("numero2").value) || 0;
    const resultadoDIV = document.getElementById("resultadoDIV");

    if (numero1 === 0 && numero2 === 0) {
        resultadoDIV.innerHTML = "Por favor preencha ambos os campos!"
        return;
    } 

        const soma = numero1 + numero2;
        const subtracao = numero1 - numero2;
        const multiplicacao = numero1 * numero2;
        const divisao = numero1 / numero2;
        const media = (soma / 2).toFixed(2);

        const resultados = `
            Somando: ${soma}<br>
            Subtraindo: ${subtracao}<br>
            Multiplicando: ${multiplicacao}<br>
            Dividindo: ${divisao}<br>
            A média entre eles: ${media}
        `;
        document.getElementById("resultadoDIV").innerHTML = resultados;        
}

document.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        calcularDIV();
    }
});