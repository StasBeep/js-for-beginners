"use strict";

/* Упражнение 6
    Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
    положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
    "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
    "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
    "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
    То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного*/

function DepositMoney() {
    let money = prompt("Введите количество денег, которые Вы хотите положить в банк: ");

    let indexEnd = +money.charAt(money.length - 1);

    // TODO: Для 11, 12, 13 - работает с багом
    switch (indexEnd) {
        case 1:
            alert("Вы положили на счёт " + money + " рубль");
            break;
        case 2:
        case 3:
        case 4:
            alert("Вы положили на счёт " + money + " рубля");
            break;
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            alert("Вы положили на счёт " + money + "рублей");
            break;
        default:
            alert("Ошибка операции");
    }

    const questions = prompt("Хотите ещё положить?");
    questions.toLowerCase();
    if(questions == "да"){
        DepositMoney();
    }
}

DepositMoney();