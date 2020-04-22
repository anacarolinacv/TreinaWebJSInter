var str = "Ana Carolina";

var myInterator = str[Symbol.iterator]();


//console.log(myInterator.next());
//console.log(myInterator.next());
//console.log(myInterator.next());
//console.log(myInterator.next());


// meu interator


var RanfonNumbers = {
    [Symbol.iterator]() {
        return this;
    },
    next() {
        var number = Math.floor(Math.random() + 6),
        isEven = (number % 2 == 0);
    }
}


var numbers = RandomNumbers[Symbol.iterator]();


console.log([...numbers]);


for(var number of numbers) {
    console.log(number);
}



var Fibonacci = {
    [Symbol.iterator](){
        var n1 = 1,
            n2 = 1;


        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
                return (value: current, done: false)

            }

            var fib = Fibonacci[Symbol.iterator]();
        }
    }
}