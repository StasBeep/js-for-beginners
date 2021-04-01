"use strict";

/* упражнение 6
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

let KolX = +prompt("Введите количество:");

for (let i = 0; i <= KolX; i++) {
    let s = "";
    for(let j = 0; j <= i; j++){
        s += "x";
    }
    console.log(s);
}