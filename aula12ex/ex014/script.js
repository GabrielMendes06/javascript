function carregar() {
  var msg = window.document.querySelector("#msg");
  var img = window.document.querySelector("img#imagem");
  var data = new Date();
  //var hora = data.getHours()
  var hora = 19;
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 6) {
    //Bom dia
    img.src = "imagens/madrugada.jpg";
    document.body.style.background = "#3C150E";
  } else if (hora >= 6 && hora < 12) {
    img.src = "imagens/manha.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "imagens/tarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    //Boa noite
    img.src = "imagens/noite.jpg";
    document.body.style.background = "#4A484F";
  }
}
