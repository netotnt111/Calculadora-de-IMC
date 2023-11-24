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
    const boxSoma = document.getElementById("boxSoma").checked;
    const boxSub = document.getElementById("boxSub").checked;
    const boxMult = document.getElementById("boxMult").checked;
    const boxDiv = document.getElementById("boxDiv").checked;
    const boxMedia = document.getElementById("boxMedia").checked;

    const numero1 = parseFloat(document.getElementById("numero1").value) || 0;
    const numero2 = parseFloat(document.getElementById("numero2").value) || 0;
    const resultadoDIV = document.getElementById("resultadoDIV");

    if (numero1 === 0 && numero2 === 0) {
        resultadoDIV.innerHTML = "Por favor preencha ambos os campos!"
        return;
    } 

    let resultados = '';

    if (boxSoma) {
        const soma = (numero1 + numero2);
        resultados += 'Somando: ' + soma + '<br>';
    }

    if (boxSub) {
        const sub = (numero1 - numero2);
        resultados += 'Subtraindo: ' + sub + '<br>';
    }

    if (boxMult) {
        const mult = (numero1 * numero2);
        resultados += 'Multiplicando: ' + mult + '<br>';
    }

    if (boxDiv) {
        if (numero2 !== 0) {
            const div = (numero1 / numero2);
            resultados += 'Dividindo: ' + div + '<br>';
        } else {
            resultados += 'Divisão por Zero (0) não é permitida.<br>';
        }
    }

    if (boxMedia) {
        const media = ((numero1 + numero2) / 2).toFixed(2);
        resultados += 'A média entre eles: ' + media + '<br>';
    }
    
        document.getElementById("resultadoDIV").innerHTML = resultados;        
}

document.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        calcularDIV();
    }
});