//  As "chaves" de criptografia que utilizaremos são:
//    `A letra "e" é convertida para "enter"`
//    `A letra "i" é convertida para "imes"`
//    `A letra "a" é convertida para "ai"`
//    `A letra "o" é convertida para "ober"`
//    `A letra "u" é convertida para "ufat"`

//pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!

function criptografar(){

//layout
  var esconder = document.getElementById("semTexto");
  esconder.classList.add("esconder");
  var btnCopy = document.getElementById("copy");
  btnCopy.classList.remove("esconder");
  var textoCrip = document.getElementById("textoCrip");
  textoCrip.classList.remove("esconder");

//Cripitografia
  var texto = document.querySelector("textarea").value;
  var cripText = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/a/g, 'ai');
  document.getElementById("textoCrip").innerHTML = cripText;
}


function descriptografar(){

//layout
  var esconder = document.getElementById("semTexto");
  esconder.classList.add("esconder");
  var btnCopy = document.getElementById("copy");
  btnCopy.classList.remove("esconder");
  var textoCrip = document.getElementById("textoCrip");
  textoCrip.classList.remove("esconder");

//Descriptografar
  var texto = document.querySelector("textarea").value;
  var decripText = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');
  document.getElementById("textoCrip").innerHTML = decripText;
}


 function copia() {

//Copiar
  var copyText = document.getElementById("textoCrip").innerHTML;
  var gambiarra = copyText

  document.getElementById("textCopy").innerHTML = gambiarra
  navigator.clipboard.writeText(gambiarra)

}


