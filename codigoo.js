class FiberOptic {
    constructor(position, bufferColor, color) {
      this.position = position;
      this.bufferColor = bufferColor;
      this.color = color;
    }
  
    toString() {
      return `Fiber ${this.position}, Color ${this.color}, Buffer ${this.bufferColor}`;
    }
}

const COLORS = ['azul', 'naranja', 'verde', 'marron', 'gris', 'blanco', 'rojo', 'negro', 'amarillo', 'violeta', 'rosa', 'celeste','azulrayado', 'naranjarayado', 'verderayado', 'marronrayado', 'grisrayado', 'blancorayado', 'rojorayado', 'negrorayado', 'amarillorayado', 'violetarayado', 'rosarayado', 'celesterayado'];
  
const fibers = [];
  
for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 12; j++) {
      fibers.push(new FiberOptic(i * 12 + j + 1, COLORS[i], COLORS[j]));
    }
}
  
function displayInfo(fiber) {
    document.getElementById('parrafo').innerHTML = fiber.toString();
}
  
function buscar() {
    const position = document.getElementById('button').value;
    const fiber = fibers[position - 1];
    displayInfo(fiber);
}

document.getElementById('button').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      buscar();
    }
  });
  