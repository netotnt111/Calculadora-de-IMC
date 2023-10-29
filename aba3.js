const altura = document.getElementById("altura")
const peso = document.getElementById("peso")

function handleMouseWheel(event, input) {
    event.preventDefaut();
    const step = parseInt(input.getAttribute("step")) || 1;

    if (event.deltaY < 0) {
        // rolar pra cima 
        input.stepUp(step);
    } else {
        // rolar pra baixo
        input.stepDown(step);
    }
}

altura.addEventListener("wheel", (event) => {
    if (altura === document.activeElement){
        handleMouseWheel(event, altura);
    }
});

peso.addEventListener("wheel", (event) => {
    if (peso === document.activeElement){
        handleMouseWheel(event, peso);
    }
});

// função da calculadora

function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso   = parseFloat(document.getElementById("peso").value);
    altura /= 100
    
// comandos com if e else para que não seja mais necessário o display de uma imagem para saber nossa situação
    
    if (isNaN(altura) || isNaN(peso)) {
      document.getElementById("resultadoIMC").textContent = "Por favor, insira valores válidos.";
    } else {
      var imc = peso / (altura * altura);
        if (imc < 17) {
          document.getElementById("resultadoIMC").textContent = "IMC: " + imc.toFixed(2) + "! Você está muito abaixo do peso!";
          } else if (imc >= 17.01 && imc <= 18.49) {
              document.getElementById("resultadoIMC").textContent = "IMC: " +imc.toFixed(2) + "! Você está abaixo do peso!";
            } else if (imc >= 18.5 && imc <= 24.99) {
                document.getElementById("resultadoIMC").textContent = "IMC: " +imc.toFixed(2) + "! Você está no peso ideal! Parabéns!";
              } else if (imc >= 25 && imc <= 29.99) {
                  document.getElementById("resultadoIMC").textContent = "IMC: " +imc.toFixed(2) + "! Você está acima do peso!";
                } else if (imc >= 30 && imc <= 34.99) {
                    document.getElementById("resultadoIMC").textContent = "IMC: " +imc.toFixed(2) + "! Você está com Obesidade I"
                  } else if (imc >= 35 && imc <= 39.99) {
                      document.getElementById("resultadoIMC").textContent = "IMC: " +imc.toFixed(2) + "! Você está com Obesidade II"
                    } else if (imc >= 40) {
                        document.getElementById("resultadoIMC").textContent = "IMC: " +imc.toFixed(2) + "! Você está com Obesidade III (mórbida)"
                    }
  }
}

// a tecla enter vai calcular!
    
document.addEventListener('keypress', function(event) {
  if (event.key === "Enter") {
    calcularIMC();
  }
});
