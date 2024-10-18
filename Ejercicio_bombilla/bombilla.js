const apagar = function () {//Apaga bombilla
  let imagen_apagado = "./imagen/bombilla_apagada.jpg";
  let imagen = document.getElementById("encendido");

  imagen.src = imagen_apagado; //cargar imagen
};

const encender = function () {//Enciende bombilla
  let imagen_encendido = "./imagen/bombilla_encendida.jpg";
  document.getElementById("encendido").src = imagen_encendido;
};

document.getElementById("boton").addEventListener("click", function () {//Valoracion de encender y apagar al clicar
  const imagen = document.getElementById("encendido");
  if (imagen.src.includes("bombilla_encendida.jpg")) {
    apagar();
  } else {
    encender();
  }
});
