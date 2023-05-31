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
  let posicionalazar = cuadrado [Math.floor (Math.random()*9)]
  posicionalazar.classlist,add("topo");

  posiciontopo = posicionalazar.id;
}
cuadrado.forEach((identificador) => {
  identificador,addEventListener("click",() => {
    if (identificador.id === posiciontopo) {
    resultado = resultado +1;
    puntaje.textcontent = resultado;
    posicionalazar = null;
    }
  });
});
function movertopo () {
  tiempotopo = serInterval(cuadrado, 700);
  }
  movertopo();

  function cuentaregresiva() {
    tiempoactual==;
    tiempofaltante.textContent = tiempoactual;
    if (tiempoactual === 0) {
      clearInterval(idtiempo);
      clearInterval(tiempotopo);
      alert("se acabo el tiempo, tu puntaje es" + resultado + "topos atrapados");
    
    }
  } 
  let idtiempo = setInterval(cuentaregresiva, 1000);