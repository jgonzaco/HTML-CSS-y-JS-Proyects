export class Model {
  constructor() {
      this.num = 0;
  }

  ModeloIncrementar() {
      if (this.num < 10) {
          this.num++;
      } else {
          alert("El número no puede ser mayor que 10");
      }
  }

  ModeloDecrementar() {
      if (this.num > -10) {
          this.num--;
      } else {
          alert("El número no puede ser menor que -10");
      }
  }

  ModeloReiniciar() {
      this.num = 0;
  }

  ModeloNumActual() {
      return this.num;
  }
}
