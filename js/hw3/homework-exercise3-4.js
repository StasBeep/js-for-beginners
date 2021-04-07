"use strict";

//*  Сортировка
//* "photos" in element - поиск свойства в объекте

/* Упражнение 4
Перед вами находится массив с продуктами в интернет - магазине.Вам нужно:
    1 Получить все товары, у которых есть фотографии, можете использовать
метод filter https: //mzl.la/2qROQkT
    2 Отсортируйте товары по цене(от низкой цены к высокой), можете
использовать метод sort https: //mzl.la/2Y79hbZ , 
    как устроен sort можно посмотреть например здесь https: //youtu.be/O2pusOp0gC0 
    или в дополнительных видео в материалах урока.*/

let products4 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

//* "photos" in element - поиск свойства в объекте
console.log(products4.filter((element) => "photos" in element && element.photos.length > 0));

// TODO: Каким образом в function(next, current) (в сами переменные next и current) попадают
// TODO: значения объектов?
/** Сортировка массива по возрастанию цены
 * @param {all} next - следующий объект
 * @param {all} current - текущий объект
 */
products4.sort(function (next, current) {
    if (next.price > current.price) {
        return 1;
    } else if (next.price < current.price) {
        return -1;
    } else {
        return 0;
    }
});
console.log(products4);