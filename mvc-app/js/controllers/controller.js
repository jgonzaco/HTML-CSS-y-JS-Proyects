import { Model } from "../models/model.js"; // Asegúrate de que la ruta sea correcta
import { View } from "../views/view.js";     // Asegúrate de que la ruta sea correcta

class Controller {
    constructor() {
        // Inicialización de modelo y vista
        this.model = new Model();
        this.view = new View();

        // Unión vista con controlador
        this.view.incrementar(() => this.incrementar());
        this.view.decrementar(() => this.decrementar());
        this.view.reiniciar(() => this.reiniciar());

        this.view.mostrarNum(this.model.ModeloNumActual());
    }

    // Método incrementar
    incrementar() {
        this.model.ModeloIncrementar();
        this.view.mostrarNum(this.model.ModeloNumActual());
    }

    // Método decrementar
    decrementar() {
        this.model.ModeloDecrementar();
        this.view.mostrarNum(this.model.ModeloNumActual());
    }

    // Método reiniciar
    reiniciar() {
        this.model.ModeloReiniciar();
        this.view.mostrarNum(this.model.ModeloNumActual());
    }
}

export { Controller }; // Asegúrate de que esta línea esté aquí
