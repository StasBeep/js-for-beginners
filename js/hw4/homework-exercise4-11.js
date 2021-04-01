"use strict";

/* Упражнение 1.1
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name 
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод 
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что 
метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно 
создавать отдельный объект-прототип (как объект transport в уроке)*/

// es5
// конструктор
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// метод
Product.prototype.make25PercentDiscount = function () {
    this.price -= this.price * 0.25;
}

// Определение объектов
let items = [
    new Product('Alex', '900'),
    new Product('Leo', '5800'),
    new Product('Roma', '1200'),
];

// Перечисление объектов
items.forEach((el_item) => {
    el_item.make25PercentDiscount();
})

// Вывод результата
console.log(items);

// es6
// Конструктор с методом в совокупности
class ProductS6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscountS6() {
        this.price -= this.price * 0.25;
    }
}

let itemsS6 = [
    new ProductS6('Alex', '1000'),
    new ProductS6('Leo', '15800'),
    new ProductS6('Lea', '100200'),
];

itemsS6.forEach((el_itemS6) => {
    el_itemS6.make25PercentDiscountS6();
})

console.log(itemsS6);