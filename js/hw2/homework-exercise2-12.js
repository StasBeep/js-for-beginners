"use strict";

// Упражнение №1
// Пояснить

/* пример 1 
в первой строчке идёт инициализация переменных a b c d 
(в a присваиваем 1, и в b присваиваем 1)*/
let a = 1, b = 1, c, d;
/* При помощи инкремента увеличиваем значение переменной a на 1,
так как инкремент префиксный, то значение a увеличивается на 1, а
затем присваивается переменной c*/
c = ++a; // a = 2
// вывод результата в сплывающем окне, при помощи функции alert
alert(c); // 2

/* пример 2 
При помощи инкремента увеличиваем значение переменной b на 1,
так как инкремент постфиксный, то значение b присваевается переменной d,
а затем переменная b увеличивается на 1*/
d = b++; // d = 1, b = 2
// вывод результата в сплывающем окне, при помощи функции alert
alert(d); // 1

/* пример 3
Так как используется префиксный инкремент, а переменная а = 2, то 
переменная a увеличивается на 1 (из-за инкремента), а потом к результату
переменной a прибавляется 2, итого 3 + 2 = 5, 5 присваивается в 
переменную c*/
c = 2 + ++a; // c = 5, a = 3
// вывод результата в сплывающем окне, при помощи функции alert
alert(c); // 5

/* пример 4
Так как используется постфиксный инкремент, то к значению b прибавляется
2, этот результат присваетвается в переменную d, а затем b увеличивается
на 1*/
d = 2 + b++; // d = 4, b = 3
// вывод результата в сплывающем окне, при помощи функции alert
alert(d); // 4

/* вывод результата в сплывающем окне, при помощи функции alert
переменной a и b*/
alert(a); // 3
alert(b); // 3


// Упражнение 2
/*Чему будут равны переменные x и a в примере ниже?
Написать почему так произошло (описать последовательность действий)*/

/* Объявление переменной а и присваивание числа 2 в переменную a, т.к.
a - объявлена была выше, то let не нужен, происходит перезапись переменной a*/
a = 2;
/*  1. Первое действие выполняется в скобках
    2. a *= 2 - это тоже самое, что и a = a * 2, т.е. переменная a
    умножается на 2, и в неё же присвается результат умножения
    3. результат в скобках: a = 4
    4. 1 + 4 присваивается в x
    5. x = 5  */
let x = 1 + (a *= 2); // 5