# Задание 4

Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы при запуске кода alert написал 'true'.

```JavaScript
let a = 12;
let b = 'number';
let c = false;
let d = null;
let e = undefined;
let f = 123.34;
let g = '1' + 1;
let h = 15 / 0;
let i = -'5';
let j = 5 == '5';

let at = typeof a === 'number'; // true
let bt = typeof b === 'SOME'; // false, а нужно чтобы все были true
let ct = typeof c === 'SOME';
let dt = typeof d === 'SOME';
let et = typeof e === 'SOME';
let ft = typeof f === 'SOME';
let gt = typeof g === 'SOME';
let ht = typeof h === 'SOME';
let it = typeof i === 'SOME';
let jt = typeof j === 'SOME';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);
```