let a = +prompt('Введите a');
let b = +prompt('Введите b');
let c = +prompt('Введите c');

if (a >= b) {
    if (a >= c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else if (b >= c) {
    console.log(b);
} else {
    console.log(c);
}