const cubo = ()=>{// Funcion calcular cubo.
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = numero * numero * numero;
    document.getElementById("numero").value = resultado;
}

document.getElementById("boton").addEventListener('click',cubo);//Cliclar para calcular el cubo.