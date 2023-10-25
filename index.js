// parte das variáveis e onde cada elemente terá seu caminho formado

function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
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
