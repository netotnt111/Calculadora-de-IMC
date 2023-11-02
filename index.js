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

  estadoOriginal()
} 

function irParaHomepage() {
  openTab('homepage');
}