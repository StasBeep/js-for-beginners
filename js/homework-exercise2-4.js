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
let FirstOperand = +prompt("Введите первый операнд");
let SecondOperand = +prompt("Введите второй операнд");
// Объявление переменной для вывода результата
let resultOperand;

switch (operation) {
    case "1":
    case "сумма":
        result = toFold(FirstOperand, SecondOperand);
        alert(resultOperand);
        break;
    case "2":
    case "разность":
        result = subtract(FirstOperand, SecondOperand);
        alert(resultOperand);
        break;
    case "3":
    case "произведение":
        // TODO: попытался пролизведение и частное вывести через стролочную функцию, но даже console.log(a*b); не вывелось
        //result = () => a * b;
        result = multiply(FirstOperand, SecondOperand);
        alert(resultOperand);
        break;
    case "4":
    case "частное":
        // TODO: попытался пролизведение и частное вывести через стролочную функцию, но даже console.log(a*b); не вывелось
        // result = () => a / b;
        result = toSharey(FirstOperand , SecondOperand);
        alert(resultOperand);
        break;
    default:
        alert("Выбрана неправильная операция");
}