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
let bt = typeof b === 'string'; // false, а нужно чтобы все были true
let ct = typeof c === 'boolean';
let dt = typeof d === 'object';
let et = typeof e === 'undefined';
let ft = typeof f === 'number';
let gt = typeof g === 'string';
let ht = typeof h === 'number';
let it = typeof i === 'number';
let jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);