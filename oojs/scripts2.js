// HERANÇA
// com funçoes 
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

// com classes

class Animal() {
    static sleep () {
        console.log("zzzzzZzzZZ");
    }
}

class Dog extends Animal {
    latir () {
        console.log("ARGH")
    }
     
}

var meuCachorro = new Dog();