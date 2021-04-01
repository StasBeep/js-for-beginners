"use strict";

/* Упражнение 5

Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.*/

//* Упс, в 4 задании поспешил, ну ладно

/** Функция суммы
 * @param {number} x1 первый операнд
 * @param {number} x2 второй операнд
 */
function toFold(x1, x2) {
    return x1 + x2;
}

/** Функция разности
 * @param {number} x1 первый операнд
 * @param {number} x2 второй операнд
 */
function subtract(x1, x2) {
    return x1 - x2;
}

/** Функция произведения
 * @param {number} x1 первый операнд
 * @param {number} x2 второй операнд
 */
function multiply(x1, x2) {
    return x1 * x2;
}

/** Функция произведения
 * @param {number} x1 первый операнд
 * @param {number} x2 второй операнд
 */
function toSharey(x1, x2) {
    return x1 / x2;
}

/** Функция калькулятор
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 */
function mathOperation(arg1, arg2, operation) {

    // Преобразование строки в строчный формат
    operation = operation.toLowerCase();
    // Объявление переменной для вывода результата
    let result;

    switch (operation) {
        case "1":
        case "сумма":
            result = toFold(arg1, arg2);
            break;
        case "2":
        case "разность":
            result = subtract(arg1, arg2);
            break;
        case "3":
        case "произведение":
            result = multiply(arg1, arg2);
            break;
        case "4":
        case "частное":
            result = toSharey(arg1, arg2);
            break;
        default:
            alert("Выбрана неправильная операция");
    }

    alert(result);
}



let operationDetails = prompt("Выберите операцию:\n1. Сумма\n2. Разность\n3.Произведение\n4.Частное");
let arg1 = +prompt("Введите первый операнд");
let arg2 = +prompt("Введите второй операнд");

mathOperation(a, b, operationDetails);