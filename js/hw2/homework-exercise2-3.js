"use strict"

// Упражнение 3
/* Объявить две переменные a и b и задать
им целочисленные произвольные начальные значения
Затем написать скрипт, который работает по следующему принципу:
    - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
    - если а и b отрицательные, вывести их произведение;
    - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;*/

let operandLeft = +prompt("Введите a:");
let operandRight = +prompt("Введите b:");

if (operandLeft >= 0 && operandRight >= 0) {
    alert(operandLeft - operandRight);
} else if (operandLeft < 0 && operandRight < 0) {
    alert(operandLeft * operandRight);
} else { // это условие можно усложнить, прописать через && и ||, но так проще
    alert(operandLeft + operandRight);
}