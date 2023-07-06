//Constantes  que toman elementos del dom
const word = document.getElementById("word");
const word2 = document.getElementById("word2");
const draw = document.getElementById("draw");
const contenido = document.getElementById("output1");
const contenido2 = document.getElementById("output2");


//Funcion que incrypta la palabra ingresada por el usuario de acuerdo a una matriz que contine por cual cadadena se rempleza la vocal de la palabra
function Encrypter(StringEncryptado) {
  let matriz = [["a", "4"], ["b", "b"], ["c","["],
  ["d", ")"],["e", "£"],["f", "|="], 
  ["g","gee"],["h", "/-/"],
  ["i", "!"], ["j", "_|"], ["k", "|{"],
  ["l", "|_"], ["m", "[V]"],
  ["n", "<\>"], ["o", "oh"],
  ["p", '|7'], ["q",'<|'], ["r", '12'],
  ["s", '§'], ["t", "-|-"], ["u", "µ"],
  ["v", "[\]"], ["w", "v²"],
  ["x", "ecks"], ["y", "Ч"], ["z", "%"]
];
   console.log(matriz[0])
  StringEncryptado = StringEncryptado.toLowerCase();

  for (let index = 0; index < matriz.length; index++) {
    console.log(matriz[index])
    if (StringEncryptado.includes(matriz[index][0])) {

      StringEncryptado = StringEncryptado.replaceAll(matriz[index][0], matriz[index][1]);

    }



  }
  return StringEncryptado;

}

//Funcion que desencrypta la palabra ingresada por el usuario de acuerdo a una matriz que contiene por cual vocal se rempleza la cadena de la palabra
function Decrypter(StringDecrypted) {
  let matriz =  [["a", "4"], ["b", "8"], ["c","["],
  ["d", ")"],["e", "£"],["f", "|="], 
  ["g","gee"],["h", "/-/"],
  ["i", "!"], ["j", ",_|"], ["k", "|{"],
  ["l", "|_"], ["m", "[V]"],
  ["n", "<\>"], ["o", "oh"],
  ["p", '|7'], ["q",'<|'], ["r", '12'],
  ["s", '§'], ["t", "-|-"], ["u", "µ"],
  ["v", "\|"], ["w", "v²"],
  ["x", "ecks"], ["y", "Ч"], ["z", "%"]
];
  StringDecrypted = StringDecrypted.toLowerCase();

  for (let index = 0; index < matriz.length; index++) {
    if (StringDecrypted.includes(matriz[index][1])) {

      StringDecrypted = StringDecrypted.replaceAll(matriz[index][1], matriz[index][0]);

    }



  }
  return StringDecrypted;

}
//Funcion que copia el texto encriptado o desencriptado en el portapaeles
function CopyText(text) {
  let copy = document.getElementById("copy");
  text = word2;
  navigator.clipboard.writeText(word2.value);
  console.log(word2.textContent)
  copy.textContent = "copiado"


}

//Fucion que muestra el texto encriptado en la interfaz

function ShowOutput() {
  draw.style.display = "none";
  contenido.style.display = "none";
  contenido2.style.display = "inline-block"
  const textEncrypted = Encrypter(word.value);
  word2.value = textEncrypted;
  word.value = ""


}

//Fucion que muestra el texto desencriptado en la interfaz

function ShowOutput2() {

  draw.style.display = "none";
  contenido.style.display = "none";
  contenido2.style.display = "inline-block"
  const textDecrypted = Decrypter(word.value);
  word2.value = textDecrypted;
  word.value = ""


}

//Fucion que valida el texto antes de encriptarlo

function SendText() {
  let warning = ""
  let regexPalabra = /^[a-z\s]+$/
  let enter = false;
  document.getElementById("clear").innerHTML = ""


  if (word.value.trim() == "") {
    warning += `el texto no puede quedar vacio <br>`
    enter = true
  }

  // else {
  //   if (!regexPalabra.test(word.value)) {

  //     warning += `el texto no puede tener tildes ni caracteres especiales <br>`
  //     enter = true

  //   }
  // }
  if (enter) {
    document.getElementById("clear").innerHTML = warning;

  } else {
    document.getElementById("clear").innerHTML = "enviado";

    ShowOutput();

  }



}
//Fucion que valida el texto antes de desencriptarlo

function SendText2() {
  let warning = ""
  let regexPalabra = /^[a-z\s]+$/
  let enter = false;
  document.getElementById("clear").innerHTML = ""


  if (word.value.length == 0) {
    warning += `el texto no puede quedar vacio <br>`
    enter = true
  }

  // else {
  //   if (!regexPalabra.test(word.value)) {

  //     warning += `el texto no puede tener tildes <br>`
  //     enter = true

  //   }
  // }
  if (enter) {
    document.getElementById("clear").innerHTML = warning;

  } else {
    document.getElementById("clear").innerHTML = "enviado";

    ShowOutput2();

  }



}
















