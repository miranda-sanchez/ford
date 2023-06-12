window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.getElementById("popup").style.display = "block";
  }, 1000);
});

/* Cerrar la ventana */
const cerrar = document.querySelector("#cerrar");
cerrar.addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
