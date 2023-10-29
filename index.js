
function openTab(tabId) {
  var i;
  var abaconteudo = document.getElementsByClassName("aba-conteudo");
  var ababotao = document.getElementsByClassName("aba-botao");

  for (i = 0; i < abaconteudo.length; i++) {
      abaconteudo[i].style.display = "none";
  }

  for (i = 0; i < ababotao.length; i++) {
      ababotao[i].classList.remove("active");
  }

  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add("active");
  
  document.getElementById('homepage').style.display = "none";
  
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add("active");
  
  resetInput();
}

function resetInput() {
  if (tabName === "aba1") {
      document.getElementById("aba1").value = "";
      document.getElementById("aba1_6").value = "";
    } else if (tabName === "aba2") {
      document.getElementById("aba2").value = "";
      document.getElementById("aba2_6").value = "";
    } else if (tabName === "aba3") {
      document.getElementById("aba3").value = "";
      document.getElementById("aba3_6").value = "";
    } else if (tabName === "aba4") {
      document.getElementById("aba4").value = "";
      document.getElementById("aba4_6").value = "";
    } else if (tabName === "aba5") {
      document.getElementById("aba5").value = "";
      document.getElementById("aba5_6").value = "";
    } else if (tabName === "aba6") {
      document.getElementById("aba6").value = "";
      document.getElementById("aba6_6").value = "";
    }
}

function irParaHomepage() {
  openTab('homepage');
}
