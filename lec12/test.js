const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2));
add(2, 4)
    .then((result) => {
        console.log(result); return result + 10;
    })
    .then((result) => {
        console.log(result); return add(result, 2);
    })
    .then((result) => {
        console.log(result);
    });
