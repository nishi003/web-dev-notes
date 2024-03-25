function outer() {
    var b = 10;
    var c = 100;

    function inner() {
        var a = 20;
        console.log("a = " + a + ", b = " + b);
        a++;
        b++;
    }

    return inner;
}

var X = outer(); 
var Y = outer();

X();
X();
X();
Y();

function foo(i) {
    var x = { count : 0 };
    return function() {
        x.count += i;
        console.log("x.count = " + x.count);
    };
}

m = foo(5);
n = foo(7);
m();
m();
n();
n();