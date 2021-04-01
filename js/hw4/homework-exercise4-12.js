"use strict";

/* Упражнение 1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
наследования -> механика наследования):
    а) конструктор Post, который принимает параметры author, text, date и сохраняет их как 
    свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать 
    текст и записывать его в свойство text объекта.
    б) конструктор AttachedPost, который принимает параметры author, text, date. 
    Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать
    код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со 
    значением false. Унаследуйте в объектах типа AttachedPost методы из Post. Объекты типа
    AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
    highlighted значение true*/

// es5
// конструктор родительский
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

// метод edit переопределение текста
Post.prototype.edit = function (txt) {
    this.text = txt;
}

// конструктор дочерний (первого поколения)
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

// Наследование пррототипов от родительского конструктора в дочерний
AttachedPost.prototype = Object.create(Post.prototype);
// Переопределение дочернего конструктора
Post.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let sharacter = new AttachedPost('Stas', 'Привет', '01.04.2021');
sharacter.edit('Сегодня день юмора');
sharacter.makeTextHighlighted();
console.log(sharacter);


//es6
// конструктор родительский с методами
class PostS6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(txt) {
        this.text = txt;
    }
}

// Дочерний конструктор с методами (унаследованный от родительского)
class AttachedPostS6 extends PostS6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlightedS6() {
        this.highlighted = true;
    }
}

let characterS6 = new AttachedPostS6('Stas', 'Hello', '01.04.2021');
characterS6.edit('Легче и быстрее на S6');
characterS6.makeTextHighlightedS6();
console.log(characterS6);