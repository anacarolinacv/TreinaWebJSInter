function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.area = function() {
        return this.base * this.altura
    }
}

function Quadrado(lado) {
    this.base = lado;
    this.altura = lado;
}
Quadrado.prototype = new Retangulo();