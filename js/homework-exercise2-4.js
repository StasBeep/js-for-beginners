"use strict"

/* Упражнение 4
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.*/

/** Функция суммы
 * @param {number} первый операнд
 * @param {number} второй операнд
 */
function toFold(x1, x2) {
    return x1 + x2;
}

/** Функция разности
 * @param {number} первый операнд
 * @param {number} второй операнд
 */
function subtract(x1, x2) {
    return x1 - x2;
}

/** Функция произведения
 * @param {number} первый операнд
 * @param {number} второй операнд
 */
function multiply(x1, x2) {
    return x1 * x2;
}

/** Функция произведения
 * @param {number} первый операнд
 * @param {number} второй операнд
 */
function toSharey(x1, x2) {
    return x1 / x2;
}



let operation = prompt("Выберите операцию:\n1. Сумма\n2. Разность\n3.Произведение\n4.Частное");
// Преобразование строки в строчный формат
operation = operation.toLowerCase();
let a = +prompt("Введите первый операнд");
let b = +prompt("Введите второй операнд");
// Объявление переменной для вывода результата
let result;

switch (operation) {
    case "1":
    case "сумма":
        result = toFold(a, b);
        alert(result);
        break;
    case "2":
    case "разность":
        result = subtract(a, b);
        alert(result);
        break;
    case "3":
    case "произведение":
        // TODO: попытался пролизведение и частное вывести через стролочную функцию, но даже console.log(a*b); не вывелось
        //result = () => a * b;
        result = multiply(a, b);
        alert(result);
        break;
    case "4":
    case "частное":
        // TODO: попытался пролизведение и частное вывести через стролочную функцию, но даже console.log(a*b); не вывелось
        // result = () => a / b;
        result = toSharey(a , b);
        alert(result);
        break;
    default:
        alert("Выбрана неправильная операция");
}