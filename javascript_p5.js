document.getElementById("mostrarPopup").addEventListener("click", mostrarPopup);

function mostrarPopup() {
  document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

function cerrarOtrosDesplegables(idActual) {
  // Selecciona todos los elementos con la clase 'collapse' (desplegables)
  var desplegables = document.querySelectorAll(".collapse");

  // Itera sobre cada desplegable
  desplegables.forEach(function (desplegable) {
    // Comprueba si el desplegable actual no es el mismo que el que se está abriendo
    if (desplegable.id !== idActual) {
      // Si no es el mismo, remueve la clase 'show' para cerrarlo
      desplegable.classList.remove("show");
    }
  });
}
