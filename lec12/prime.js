function range(s, e, i=1) {
    var n = Math.floor((e - s - 1) / i) + 1;
    if (n <= 0) return [];
    return [...Array(n).keys()].map(v => v*i + s);
}

function primes(n) {
    if (n < 2) { return []; }
    let list = range(2, Math.floor(n/2));
    let nested = list.map(i => range(i*2, n+1, i));
    let composite = nested.flat();
    let allnum = range(2, n+1);
    return allnum.filter(v => !composite.includes(v));
}

let a = [1, 2, 3, 4];
let {0: x, [a.length-1]: y, ...z} = a;
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + JSON.stringify(z));
