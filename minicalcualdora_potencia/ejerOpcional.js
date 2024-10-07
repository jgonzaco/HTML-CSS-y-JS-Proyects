function potencia() {//Funcion de potencia
    let numero = document.getElementById("numero").value;
    let potencia = Math.pow(parseInt(numero), 3);

    document.getElementById("resultado").innerHTML = potencia;
}

function blanco(){//Funcion blanco
    document.getElementById("numero").value = "";

}