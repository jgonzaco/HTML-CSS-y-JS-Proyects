class View {
    constructor() {
        // Contenedor donde se va a introducir todas
        this.app = document.getElementById("app");

        // ------- Creación h1 ------------
        this.encabezado = document.createElement("h1");
        this.encabezado.textContent = 0; // Inicialización del texto a 0
        this.encabezado.style.color = "blue"; // Estilo color blue

        // ------- Creación de botones ------------
        this.botonIncrementar = document.createElement("button");
        this.botonIncrementar.textContent = "Incrementar";

        this.botonDecrementar = document.createElement("button");
        this.botonDecrementar.textContent = "Decrementar";

        this.botonReiniciar = document.createElement("button");
        this.botonReiniciar.textContent = "Reiniciar";

        // Agregar encabezado y botones al contenedor
        this.app.append(this.encabezado, this.botonIncrementar, this.botonDecrementar, this.botonReiniciar); 
    }

    // Actualizar el texto en el encabezado
    mostrarNum(num) {
        this.encabezado.textContent = num;

        if (num > 0) {
            this.encabezado.style.color = "green"; // Verde si el número es positivo
        } else if (num < 0) {
            this.encabezado.style.color = "red"; // Rojo si el número es negativo
        } else {
            this.encabezado.style.color = "blue"; // Azul si el número es cero
        }
    }

    // Asociar manejadores a los botones
    incrementar(handler) {
        this.botonIncrementar.addEventListener("click", handler);
    }

    decrementar(handler) {
        this.botonDecrementar.addEventListener("click", handler);
    }

    reiniciar(handler) {
        this.botonReiniciar.addEventListener("click", handler);
    }
}

export { View }; // Asegúrate de exportar la clase
