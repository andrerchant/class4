class animal {
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
  }

  roar() {
    return `${this.nombre} de color ${this.color} está gruñendo`;
  }
}

export default class perrito extends animal {
  constructor(nombre, color) {
    super(nombre, color);
  }

  roar() {
    return `${this.nombre} de color ${this.color} empezó a ladrar 🐶`;
  }
}
