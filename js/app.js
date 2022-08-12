var botonEncryptar = document.querySelector(".encriptar");

var botonDesencriptar = document.querySelector(".desencriptar");

var letra = document.querySelector(".ningunMensaje");


var portapapel;

var botonCopiar = document.querySelector(".copiar");

function encriptar() {
  //var textoPrueba = datoEncriptado.value;
  var datoEncriptado = document.querySelector("#textArea").value;

  if (datoEncriptado == "") {
    alert("No puede Realizar operaciones sin Textos");
  } else {
    var textoCifrado = datoEncriptado
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    letra.innerHTML = textoCifrado;
    return textoCifrado;
  }
}

function desencriptar() {
  var textoSalida = document.querySelector("#textArea").value;


  var txtDescriptado = textoSalida
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(textoSalida == ""){
      alert("No puedo Desencriptar Campos Vacios")
    }
    else{
      letra.innerHTML = txtDescriptado;
    }
}

function copiarTextos() {
  navigator.clipboard.writeText(encriptar());
}

botonEncryptar.onclick = encriptar;
botonCopiar.onclick = copiarTextos;
botonDesencriptar.onclick = desencriptar;
