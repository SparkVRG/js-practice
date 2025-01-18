let a = +prompt('Катет A', '');
let b = +prompt('Катет B', '');
let c = +prompt('Гипотенуза C', '');

if (a ** 2 + b ** 2 == c ** 2) {
    console.log('Это прямоугольный треугольник!');
} else {
    console.log('Это не прямоугольный треугольник!');
}