"use strict";

/* Упражнение 1
Написать функцию, преобразующую число в объект. Передавая на вход
число в диапазоне [0, 999], мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект*/

function splittingNumber(numberFigure) {
    if (numberFigure < 0 || numberFigure > 999 || isNaN(numberFigure)) {
        alert("Не число");
        return {};
    }
    return {
        units: numberFigure % 10,
        tens: Math.floor(numberFigure / 10) % 10,
        hundreds: Math.floor(numberFigure / 100)
    }
}

let numberFigure = +prompt("Введите число:");

let resualtNumber = splittingNumber(numberFigure);
console.log(resualtNumber);