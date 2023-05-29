const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;
let posiciontopo= null;

function cuadradoazar() {
  cuadrado.forEach((nombredeclase) => {
    nombredeclase.classlist.remove("topo");
  });
  letposicionalazar = cuadrado [Math.floor (Math.random()*9)]
  posicionalazar.classlist,add("topo");

  posicionalazar= posicionalazar.id;