function Copo(cor, tamanho) {
    var preco = 14.99;
    if (!(this instanceof Copo)) {
        return new Copo(cor, tamanho);
    }
    this.cor = cor;
    this.tamanho = tamanho;


    this.encher = function(quantidade) {
        this.tamanho += quantidade;
    }

    this.getCode() {
        return preco;
    }

}

var meuCopo = new Copo('vermelho', 15);
var meuCopo2 = Copo('azul', 12);

// o codigo privado nao garante a segurança do seu codigo


function Animal() {
    
    this.dormir() {
        console.log("zzzzZZzzz");
    }
}


function Dog() {
    this.latir() {
        console.log("ARGH");
    }
}
Dog.prototype = new Animal();

var meuCachorro = new Dog();