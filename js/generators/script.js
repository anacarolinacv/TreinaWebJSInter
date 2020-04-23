
//yield vai retornar o resultado e pausar
// nao finalizara

function* myContatdor() {
    var i = 0;
    while(true) {
        yield i++;
    }
}



// retornara o resultado do primeiro loop
var contador = myContatdor();

// retornara o proximo passo
var contator = contador.next();

// atua como sendo um for
 
function* mygenerator() {
    yield* [1,2,3,4,5];
}


