const valorWheel = document.getElementById("valor");
const descontoWheel = document.getElementById("desconto");

function handleMouseWheel(event, input) {
    event.preventDefaut();
    const step = parseInt(input.getAttribute("step")) || 1;

    if (event.deltaY < 0) {
        input.stepUp(step);
    } else {
        input.stepDown(step);
    }
}

valorWheel.addEventListener("wheel", (event) => {
    if (valorWheel === document.activeElement) {
        handleMouseWheel(event, valorWheel);
    }
});

descontoWheel.addEventListener("wheel", (event) => {
    if (descontoWheel === document.activeElement) {
        handleMouseWheel(event, descontoWheel);
    }
});

function desconto() {
    const valorOriginal = parseFloat(document.getElementById("valor").value);
    const desconto = parseFloat(document.getElementById("desconto").value);
    const valorComDescontoElement = document.getElementById("resultadoDesconto");

    if (!isNaN(valorOriginal) && !isNaN(desconto)) {
        const valorComDesconto = valorOriginal - (valorOriginal * (desconto / 100));
        const valorPago = valorOriginal - valorComDesconto;
        valorComDescontoElement.textContent = `Você pagará R$${valorComDesconto.toFixed(2)} e está economizando: R$${valorPago.toFixed(2)}.`;
    } else {
        valorComDescontoElement.textContent = "Por favor, insira números válidos!";
    }
}

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        desconto();
    }
});