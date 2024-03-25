function outer() {
    let a = [];
    for (var i=1; i<=3; i++)
        a.push(function() {
            return x;
        });
    return a;
}

for (fun of outer()) {
    console.log("i = " + fun());
}