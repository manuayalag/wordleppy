let intentos = 6;
let diccionario = ["APPLE", "HURLS", "WINGS", "YOUTH"];
const BUTTON = document.getElementById("guess-button");
const GANASTE = document.getElementById("ganaste");
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

window.addEventListener("load", init);
BUTTON.addEventListener("click", intentar);
function init() {
  console.log("Esto se ejecuta cuando se carga la pagina web");
}
function intentar() {
  const INTENTO = leerIntento();
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  console.log(INTENTO);
  console.log(palabra);
  for (let i in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (INTENTO[i] === palabra[i]) {
      //VERDE
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "green";
    } else if (palabra.includes(INTENTO[i])) {
      //AMARILLO
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "yellow";
    } else {
      //GRIS
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "grey";
    }
    
    ROW.appendChild(SPAN);
  }
  console.log(intentos);
  GRID.appendChild(ROW);
  intentos--;
  if (intentos == 0) {
    terminar("PERDISTE");
  }
    if (INTENTO == palabra) {
    terminar("GANASTE");
  }
}
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}
function terminar(mensaje){
  const INPUT = document.getElementById("guess-input");
  GANASTE.style.display = "block";
  console.log(mensaje);
  if (mensaje == "GANASTE"){
    GANASTE.style.backgroundColor = "green";
  } else {
    GANASTE.style.backgroundColor = "red";
  }
  GANASTE.textContent = mensaje;
  INPUT.disabled = true;
  BOTON.disabled = true;
  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}
