var a = {
    name: "Jess",
    greet() {
        console.log("Hello, " + this.name);
    }
};

var b = {
    name: "Bob",
    greet: a.greet,
};

// what should this print?
b.greet();
